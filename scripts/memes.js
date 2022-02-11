const path = require("path");
const builder = require("./fs-builder");

const memeTitles = [
  "Drake Hotline Bling",
  "Two Buttons",
  "Distracted Boyfriend",
  "Running Away Balloon",
  "Left Exit 12 Off Ramp",
  "UNO Draw 25 Cards",
  "Buff Doge vs. Cheems",
  "Change My Mind",
  "Gru's Plan",
  "Bernie I Am Once Again Asking For Your Support",
  "Woman Yelling At Cat",
  "Batman Slapping Robin",
  "Waiting Skeleton",
  "Expanding Brain",
  "Epic Handshake",
  "Disaster Girl",
  "Sad Pablo Escobar",
  "Tuxedo Winnie The Pooh",
  "Boardroom Meeting Suggestion",
  "I Bet He's Thinking About Other Women",
  "Monkey Puppet",
  "Always Has Been",
  "Mocking Spongebob",
  "Anakin Padme 4 Panel",
  "Panik Kalm Panik",
  "Blank Nut Button",
  "Hide the Pain Harold",
  "They're The Same Picture",
  "X, X Everywhere",
  "Bike Fall",
  "Clown Applying Makeup",
  "Is This A Pigeon",
  "Trade Offer",
  "Guy Holding Cardboard Sign",
  "One Does Not Simply",
  "This Is Fine",
  "Inhaling Seagull",
  "The Scroll Of Truth",
  "The Rock Driving",
  "Ancient Aliens",
  "Marked Safe From",
  "Gus Fring we are not the same",
  "Roll Safe Think About It",
  "Success Kid",
  "Surprised Pikachu",
  "American Chopper Argument",
  "This Is Where I'd Put My Trophy If I Had One",
  "Y'all Got Any More Of That",
  "Sleeping Shaq",
  "Laughing Leo",
  "Who Killed Hannibal",
  "Oprah You Get A",
  "Evil Kermit",
  "Teacher's Copy",
  "where monkey",
  "Finding Neverland",
  "Unsettled Tom",
  "Flex Tape",
  "Third World Skeptical Kid",
  "Grandma Finds The Internet",
  "Hard To Swallow Pills",
  "Spongebob Ight Imma Head Out",
  "A train hitting a school bus",
  "Types of Headaches meme",
  "All My Homies Hate",
  "Whisper and Goosebumps",
  "Futurama Fry",
  "Leonardo Dicaprio Cheers",
  "Trump Bill Signing",
  "mr incredible becoming uncanny",
  "You Guys are Getting Paid",
  "Doge",
  "Squidward window",
  "Normal and dark mr.incredibles",
  "Disappointed Black Guy",
  "spiderman pointing at spiderman",
  "Average Fan vs Average Enjoyer",
  "Grant Gustin over grave",
  "They don't know",
  "Drake Blank",
  "Bernie Sanders Once Again Asking",
  "Pawn Stars Best I Can Do",
  "You know, I'm something of a scientist myself",
  "is this butterfly",
  "Domino Effect",
  "Blank White Template",
  "Mother Ignoring Kid Drowning In A Pool",
  "Anime Girl Hiding from Terminator",
  "Mr. McMahon reaction",
  "What Gives People Feelings of Power",
  "Soyboy Vs Yes Chad",
  "Brain Before Sleep",
  "Bugs bunny communist",
  "where banana",
  "Three-headed Dragon",
  "Star Wars Yoda",
  "Friendship ended",
  "Imagination Spongebob",
  "Is This a Pigeon",
  "AJ Styles & Undertaker",
  "Look At Me",
  "Traumatized Mr. Incredible",
  "Soldier protecting sleeping child",
  "The Most Interesting Man In The World",
  "Math lady/Confused lady",
  "Both Buttons Pressed",
  "the office congratulations",
  "Jack Sparrow Being Chased",
  "Spongebob Burning Paper",
  "Disappearing kid gif",
  "i receive you receive",
  "Oh yeah! Oh no...",
  "Empty Stonks",
  "That Would Be Great",
  "Moe throws Barney",
  "Did you mean?",
  "c'mon do something",
  "See Nobody Cares",
  "Spider Man Triple",
];

const extensions = ["gif", "jpg", "png"];

function choice(list) {
  return list[Math.floor(Math.random() * list.length)];
}

const memeFileNames = memeTitles.map(
  (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z\s]/g, "")
      .split(" ")
      .join("-") + `.${choice(extensions)}`
);

async function generateMemeDownloadFolder() {
  const pairs = memeFileNames.map((memeFileName) => {
    const ext = path.basename(memeFileName).split(".")[1];
    const src = ["file-system", "assets", `rickthumb.${ext}`];
    const dest = ["file-system", "samples", "Downloads", memeFileName];
    return [src, dest];
  });
  return await builder.massCopier(pairs);
}

module.exports = {
  generateMemeDownloadFolder,
};
