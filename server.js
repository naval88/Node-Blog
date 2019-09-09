var express = require('express');
var app = express();
var router = express.Router();
module.exports = router;
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/upload', express.static(__dirname + '/upload'));
app.use('/public', express.static(__dirname + '/public'));
const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
require('./router/app.router.js')(app);
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})