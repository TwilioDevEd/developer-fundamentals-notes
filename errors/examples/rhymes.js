const dictionary = require("ryhming-dictionary");

function rhyme(word) {
  if (word === "orange") {
    throw new Error("There is no known word that rhymes with orange. Try a new word");
  }
  return dictionary.getRhyme(word);
}