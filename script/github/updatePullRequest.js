function generateBodyPR(pullRequestsStagingMerged) {
  const semver = require('semver');

  // Generate and update pull request body
  const mappedTitle = str => {
    const prefix = str.split('-')[0].trim().toLowerCase();
    return {
      prType: prefix,
      title: str,
    };
  };
  let body = '';
  const titles = pullRequestsStagingMerged.map(item => ({
    ...mappedTitle(item.title),
    url: item.url,
  }));
  console.log('titles', titles);
  const listTypes = ['fix', 'feature', 'modify', 'breaking'];
  const mappingType = {
    fix: 'patch',
    feature: 'minor',
    modify: 'minor',
    breaking: 'major',
  };
  console.log('listTypes', listTypes);
  let releaseType = mappingType.fix;
  listTypes.forEach(prType => {
    console.log('prType', prType);
    body += `\n## ${prType}`;
    const titleTypes = titles.filter(title => title.prType === prType);
    titleTypes.forEach(titleType => {
      releaseType = mappingType[titleType.prType];
      body += `\n - ${titleType.title} [url](${titleType.url})`;
    });
  });
  const finalVersion = semver.inc(process.env.TAG_LATEST, releaseType);
  console.log('finalVersion', finalVersion);
  console.log('releaseType', releaseType);
  console.log('body', body);
  return {
    body,
    finalVersion,
  };
}

module.exports = async ({context, github}) => {
  // get list of merged PR to staging since last git tag
  const lastTagReleaseDate = new Date(
    Number(process.env.TAG_LATEST_DATE) * 1000,
  ).toISOString();
  console.log('lastTagReleaseDate', lastTagReleaseDate);
  const pullRequestsStagingMerged = await github.rest.issues.listForRepo({
    owner: context.actor,
    repo: context.repo.repo,
    state: 'closed',
    labels: ['QAPassed', 'dev'],
    sort: 'updated',
    since: lastTagReleaseDate,
  });
  console.log('pullRequestsStagingMerged', pullRequestsStagingMerged);

  // generate body
  const {body, finalVersion} = generateBodyPR(pullRequestsStagingMerged.data);

  // Get Pull Request Release
  const pullRequestsReleases = await github.rest.pulls.list({
    owner: context.actor,
    repo: context.repo.repo,
    state: 'open',
    base: 'main',
    sort: 'updated',
  });
  console.log('pullRequestsReleases', pullRequestsReleases);

  // Update
  await github.rest.pulls.update({
    owner: context.actor,
    repo: context.repo.repo,
    pull_number: pullRequestsReleases.data[0].number,
    title: `Release - ${finalVersion}`,
    labels: ['release'],
    body,
  });
};
