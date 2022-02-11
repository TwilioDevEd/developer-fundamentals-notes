const builder = require("./fs-builder");

const samplePath = ["file-system", "samples"];

const silverwarePaths = [
  ["house", "kitchen", "drawers", "silverware", "spoons", "spoon1.txt"],
  ["house", "kitchen", "drawers", "silverware", "forks", "metafork.txt"],
];

const paths = silverwarePaths.map((p) => samplePath.concat(p));
builder
  .massTextFileCreator(paths, "hi mom!")
  .then((results) => console.log(`Created ${results.length} text files`))
  .catch((err) => console.error(err));
