const express = require("express");
const path = require("path");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes); //data routes and page route

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
