const memes = require("./memes");

memes.generateMemeDownloadFolder()
  .then(result => console.log("DONE"))
  .catch(err => console.error(err));
