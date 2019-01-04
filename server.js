const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  // res.send("<h1>Hello Express!</h1>");
  res.send({
    name: "Cody",
    likes: ["cooking", "coding", 333, "being a dad"]
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs");
});

app.get("/bad", (req, res) => {
  res.send({
    errMsg: "You have been badded."
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
