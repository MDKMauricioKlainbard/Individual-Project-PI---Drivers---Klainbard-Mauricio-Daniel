const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routerDriver = require('./routes/routerDriver');
const routerTeam = require('./routes/routerTeam');


const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use('/', routerDriver);
server.use('/',routerTeam);

module.exports = server;
