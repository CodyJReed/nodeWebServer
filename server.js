const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express!</h1>");
  res.send({
    name: "Cody",
    likes: ["cooking", "coding", 333, "being a dad"]
  });
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/bad", (req, res) => {
  res.send({
    errMsg: "You have been badded."
  });
});

app.listen(3000);
