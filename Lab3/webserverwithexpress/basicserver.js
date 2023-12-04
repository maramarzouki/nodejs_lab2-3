var express = require('express')
http = require('http');

var app = express()
.use(function(req, res, next){
    res.send('Hello, express!')
})

http.createServer(app).listen(3000)