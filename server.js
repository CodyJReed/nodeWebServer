const express = require("express");
const hbs = require("hbs");

const app = express();

// Call to built-in hbs method "registerPartials()"
// @params - STRING reference to "partials" location
// partials = scripts && components
hbs.registerPartials(__dirname + "/views/partials");
// Set to view engine, this could be hbs, html, etc.
app.set("view engine", "hbs");
// Built-in middleware function
// @params - root directory for serving static files
app.use(express.static(__dirname + "/public"));

// Helper function creator
// @params - string + callback
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

// Requests...
app.get("/", (req, res) => {
  const data = "buddy";

  res.render("home.hbs", {
    pageTitle: "Home Page",
    someData: `Hey there ${data}!`
  });
});

app.get("/about", (req, res) => {
  res.render("about.hbs", {
    pageTitle: "About Page"
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
