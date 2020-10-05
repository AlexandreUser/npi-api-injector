const express = require("express");
const routes = express.Router();
const npiController = require("./controller/npi.controller");

routes.post("/api/v1/npi", npiController.post);
module.exports = routes;
