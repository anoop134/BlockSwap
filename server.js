var express = require('express');
var app = express();
var path = require('path');
var fileSystem = require('fs');

/* Modules for https*/
// var https = require('https');
// var fs = require('fs');

/* Code for https */
// var options = {
//     key: fs.readFileSync('./www_kryptoro_exchange.key'),
//     cert: fs.readFileSync('./www_kryptoro_exchange.crt')
// };

app.use(express.static(path.join(__dirname, 'Bithood')));

app.get('*', function(req, res) {
    res.sendFile(__dirname + '/Bithood/index.html');
});

app.post('*', function(req, res) {
    res.sendFile(__dirname + '/Bithood/index.html');
});

app.set('port', process.env.PORT || 1473);

/* Code for https */
// https.createServer(options, app).listen(app.get('port'));

/* Code for http */
app.listen(app.get('port'), function() {
    console.log("server running on port %s", app.get('port'))
});