const express = require('express');
const router = express.Router();
const path = require('path');


module.exports.dashboard = (req, res) => {
  res.sendFile(path.join(__dirname, '../../react-client/dist/index.html'));
};

module.exports.landing = (req, res) => {
  res.sendFile(path.join(__dirname, '../../react-client/dist/index.html'));
}
