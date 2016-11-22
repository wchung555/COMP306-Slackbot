"use strict";

const service = require("../server/service.js");
const http = require("http");

// create server
const server = http.createServer(service);
server.listen(3000);

// subscribe to event listener
server.on('listening', function() {
    console.log(`My Slackbot is listening on  $(server.address().port) in $(service.get('env')) mode.`); // 'backquotes' allow vars to be included in the string
});