const browserify = require('browserify-middleware');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const cors = require('cors');

let port = process.env.PORT || 7777

app.listen(port, () => {
    console.log('Listening on port: ' + port);
});

app.use('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, '/client/style.css'))
});

app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, './client')));

// app.get('/bundle.js', browserify('./client/index.js', {
//   transform: [ [ require('babelify'), { presets: ['es2015', 'react'] } ] ]
// }));

app.get('/bundle.js', function(req, res) {
	res.sendFile(path.join(__dirname, './build/bundle.js'))
})

app.get('/resume.pdf', function(req, res) {
	res.sendFile(path.join(__dirname, './resume.pdf'))
})

app.get('/coolresume.pdf', function(req, res) {
	res.sendFile(path.join(__dirname, './coolresume.pdf'))
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


