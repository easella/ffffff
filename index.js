var proxy = require('express-http-proxy');
var http=require("http")
http.globalAgent.maxSockets = Infinity;

var compression = require('compression')
var cors=require("cors")
const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

var app = require('express')();

var server=http.createServer(app)
app.use(compression())
app.use(cors())


app.use(proxy('https://aquapark.io'));

/*
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/
server.listen(8080)
