const express = require("express");
const bodyParser = require("body-parser");
const { Server } = require("mongodb");
const app = express();

//middlewares
app.use(bodyParser.urlencoded({ extended: true }));
Server.use(bodyParser.json());

app.listen(process.env.PORT || 3000);
//"https://crud-tastic-demo.herokuapp.com/

allStarWars = [];
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/quotes", (req, res) => {
  res.send(allStarWars);
});

app.post("/quotes", (req, res) => {
  const result = allStarWars.push(req.body);
  res.send(result);
});
