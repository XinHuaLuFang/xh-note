const { getChangedFilesForRoots } = require('jest-changed-files');

getChagnedFilesForRootr(['./'], {
  lastCommit: true
}).then(result => console.log(result.changedFiles))
