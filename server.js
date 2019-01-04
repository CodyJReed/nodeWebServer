const express = require("express");
const hbs = require("hbs");

const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  const data = "buddy";

  res.render("home.hbs", {
    pageTitle: "Home Page",
    someData: `Hey there ${data}!`,
    currentYear: new Date().getFullYear()
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page",
    currentYear: new Date().getFullYear()
  });
});

app.get("/bad", (req, res) => {
  res.send({
    errMsg: "You have been badded."
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
