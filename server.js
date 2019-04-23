var express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();

app.use(cors({ origin: "*" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);

//Routes
let vs = "/api";
const routes = require("./routes");
app.use(vs, routes);

app.use(function(req, res, next) {
  res.send("OCMS Project API MySQL");
});

//Running Port
port = process.env.PORT || 3002;
app.listen(port, function() {
  console.log("Node app is running on:", "http://localhost:" + port + vs, "\n");
});
