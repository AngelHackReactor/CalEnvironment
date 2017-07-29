const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const CalRawData = require('../CalEnviroScreenRawData.json');


const app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



/*******************************
REACT ROUTER ROUTES
*******************************/
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
});

app.get('/dashboard', (req, res) => {
  console.log('CalRawData', CalRawData[0])
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
})

app.get('/landing', (req, res) => {
  res.sendFile(path.join(__dirname, '/../react-client/dist/index.html'));
})







/*******************************
Start Server on port 3000
*******************************/

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port', port);
});
