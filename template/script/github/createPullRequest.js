module.exports = async ({context, exec, github}) => {
  console.log('context', context);
  const semver = require('semver');
  const fs = require('fs');
  console.log('TAG_LATEST', process.env.TAG_LATEST);
  // Temporary version : get git last tag add patch
  const finalVersion = semver.inc(process.env.TAG_LATEST, 'patch');
  console.log('finalVersion', finalVersion);
  // Commit changes package.json
  await exec.exec('git checkout staging');
  try {
    const jsonString = fs.readFileSync('./package.json');
    const packageJson = JSON.parse(jsonString);
    console.log('first version', packageJson);
    packageJson.version = finalVersion;
    const stringifyOutput = JSON.stringify(packageJson, null, 2);
    console.log('second version', stringifyOutput);
    fs.writeFileSync('./package.json', stringifyOutput);
  } catch (err) {
    console.log(err);
  }
  await exec.exec('git add .');
  await exec.exec('git', [
    'commit',
    '-m',
    "'[MODIFY] patch version package.json to start new pull request release'",
  ]);
  await exec.exec('git push origin staging');

  // Create PR
  const createdPR = await github.rest.pulls.create({
    owner: context.repo.owner,
    repo: context.repo.repo,
    head: 'staging',
    base: 'main',
    title: `Release - ${finalVersion}`,
    labels: ['release'],
    body: `
    ## fix
    ## feature
    ## modify
    ## breaking
    `,
  });
  console.log('createdPR', createdPR);
  return createdPR;
};
