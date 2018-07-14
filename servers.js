var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var express = express();

var PORT = process.env.PORT || 8080

express.use(bodyParser.urlencoded({ extended: true }));
express.use(bodyParser.json());
express.use(bodyParser.text());
express.use(bodyParser.json({ type: 'application/vnd.api+json' }))

require("./routes/apiRoutes")(express);
require("./routes/htmlRoutes")(express);
express.listen(PORT, function () {
    console.log("App listening to PORT: " + PORT);
})
