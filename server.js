var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

// app.get('/about', function(req, res) {

//     // ejs render automatically looks in the views folder
//     res.render('about');
// });

// app.get('/contact', function(req, res) {

//     // ejs render automatically looks in the views folder
//     res.render('contact');
// });

app.listen(port, function() {
    console.log("I'm listening to you on http://localhost:" + port);
});