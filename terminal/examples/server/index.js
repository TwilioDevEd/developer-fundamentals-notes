const express = require("express");

const app = express();  

const PORT = 3000;

app.get("/", (req, res) => {
    res.type("html");
    res.send(`
      <h1>You've Got This!</h1>
      <p>You should go check out <a href="https://twilio.com/quest">TwilioQuest</a></p>
    `);
})


console.log(`Server is listening on port ${PORT}`);
console.log(`You are an amazing developer. You've got this 💪 🚀`);
app.listen(PORT);