const express = require("express");
const hbs = require("hbs");
const fs = require("fs");

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

app.use((req, res, next) => {
  // Logger
  const now = new Date().toString();
  const log = `${now}: ${req.method} ${req.path}`;
  console.log(log);
  fs.appendFile("server.log", log + `\n`, err => {
    if (err) {
      console.log("Unable to append to server.log.");
    }
  });
  next();
});

app.use((req, res, next) => {
  res.render("maintence.hbs", {
    pageTitle: "So sorry...",
    someData: "We're updating the site and will have it back up soon."
  });
});

// Helper function creator
// @params - string + callback
hbs.registerHelper("getCurrentYear", () => {
  return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
  return text.toUpperCase();
});

// Requests...
app.get("/", (req, res) => {
  res.render("home.hbs", {
    pageTitle: "Home Page",
    someData: `Hi there! Welcome to my Website.`
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
