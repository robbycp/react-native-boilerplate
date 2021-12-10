module.exports = async ({github, context}) => {
  // Get Pull Request Release
  const pullRequestsReleases = await github.rest.pulls.list({
    owner: context.actor,
    repo: context.repo.repo,
    state: 'open',
    base: 'main',
    sort: 'updated',
  });

  let output = {};
  if (pullRequestsReleases.data.length === 0) {
    output = {
      processType: 'create',
    };
  } else {
    output = {
      processType: 'update',
      prNumber: pullRequestsReleases.data[0].number,
    };
  }
  console.log('output', output);
  return output;
};
