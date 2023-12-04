var express = require('express');
const path = require('path');
var serveStatic = require('serve-static');

// var app = express()
// .use(serveStatic(__dirname + '/public')).listen(3000)


var app = express().use(express.static(__dirname + '/public')).listen(3000)
