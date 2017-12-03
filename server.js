var browserify = require('browserify-middleware');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var cors = require('cors');

var port = 3302
app.set('port', port);
app.listen(app.get('port'), function() {
  console.log('Listening on port: ', port)
});

app.use('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/style.css'))
});

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, './client')));

app.get('/bundle.js', browserify('./client/index.js', {
  transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
}));

app.get('/resume', function(req, res) {
	res.sendFile(path.join(__dirname, './resume.pdf'))
})

app.get('/lpb', function(req, res) {
	res.sendFile(path.join(__dirname, './lennypepperbottom.jpg'))
})

app.get('/', function(req, res) {

  res.status(200)
  res.send()
})

app.get('*', function(req, res) {
	var url = req.url.split('//')
	var path = 'http://' + url[1]
	res.redirect(path)
})


