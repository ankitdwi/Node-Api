//dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
var uristring =
process.env.MONGOLAB_URI ||
'mongodb://192.168.1.105:27017/Audit';

//Mongodb connect
mongoose.connect(uristring, function (err, res) {
    if (err) {
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
        console.log('Succeeded connected to: ' + uristring);
    }
});

// Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./app/routes/api'));

//set port
app.set('port', (process.env.PORT || 3000));

// Start server
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});