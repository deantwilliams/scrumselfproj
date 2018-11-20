const mongoose = require('mongoose');
require('./server/config/database.config')(mongoose);

var app = require('./server/server');
var port = process.env.PORT || 8080;

app.get('server').listen(port);
console.log('Site live on port ' + port);

module.exports = app;