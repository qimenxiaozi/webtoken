var config = require('./config._js');
var status = require('./status._js');
var crypto = require('crypto');


global.uuid = require('node-uuid').v4;


var express = require('express-streamline');
var app = express();
app.set('x-powered-by', false);

var httpServer = require('http').createServer(app);
httpServer.listen(config.httpPort, _);

var routescan = require('express-routescan');
routescan(
    app,
    {
        ext: ['._js'],
        directory: [
            __dirname + '/middleware',
            __dirname + '/api'
        ]
    }
);
