const fs = require("fs");
const path = require("path");

// Takes a list of ["folder", "paths"]
// And ensures the directory exists
// Any entry with an extension (`.`) will be assumed to be a file
function buildRequiredDirs(paths) {
  const pathSet = new Set();
  paths.forEach(p => {
    let filePath = path.resolve(...p);
    if (path.basename(filePath).includes(".")) {
      // Lose the path name
      const dirOnly = p.slice(0, -1);
      filePath = path.resolve(...dirOnly);
    }
    pathSet.add(filePath);
  });
  [...pathSet].forEach(fp => {
    console.log(`Creating directory: ${fp}`);
    fs.mkdirSync(fp, {recursive: true});
  });
  return pathSet.size;
}

async function massCopier(srcDestPairs) {
  const destPaths = srcDestPairs.map((pair) => pair[1]);
  const dirCount = buildRequiredDirs(destPaths);
  console.log(`Verified ${dirCount} directories`);
  const promises = srcDestPairs.map(async (pair) => {
    const [src, dest] = pair;
    const srcFile = path.resolve(...src);
    const destFile = path.resolve(...dest);
    return fs.copyFileSync(
      srcFile, destFile
    );
  });
  const results = await Promise.all(promises);
  return results;
}

module.exports = {
  buildRequiredDirs,
  massCopier
};

