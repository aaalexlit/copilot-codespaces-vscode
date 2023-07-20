// create web server
// open cmd
// node comment.js
// open browser
// http://localhost:3000
// open cmd
// ctrl+c

var express = require('express');
var app = express();

// set view engine
app.set('view engine', 'ejs');

// set static files
app.use(express.static(__dirname + '/public'));

// set routes
app.get('/', function(req, res) {
    res.render('home');
});

app.get('/fallinlovewith/:thing', function(req, res) {
    var thing = req.params.thing;
    res.render('love', {thingVar: thing});
});

app.get('/posts', function(req, res) {
    var posts = [
        {title: 'Post 1', author: 'Susy'},
        {title: 'Post 2', author: 'Charlie'},
        {title: 'Post 3', author: 'Colt'}
    ];

    res.render('posts', {posts: posts});
});

// listen for requests (start server)
app.listen(3000, function() {
    console.log('Server has started');
});