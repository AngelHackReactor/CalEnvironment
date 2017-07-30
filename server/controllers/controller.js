const express = require('express');
const router = express.Router();
const path = require('path');
const request = require('request');
const Bookshelf = require('../../db/BookshelfFunctions.js');


module.exports.dashboard = (req, res) => {
  res.sendFile(path.join(__dirname, '../../react-client/dist/index.html'));
};

module.exports.landing = (req, res) => {
  res.sendFile(path.join(__dirname, '../../react-client/dist/index.html'));
}

module.exports.getCensusTract = (req, res) => {
  // console.log('req.query', req.query)
  let addressStr = req.query.addressInput;

  request(`https://geocoding.geo.census.gov/geocoder/geographies/onelineaddress?address=${addressStr}&benchmark=Public_AR_Census2010&vintage=Census2010_Census2010&layer s=14&format=json`, 
    (err, resp, body) => {
      let censusTract = JSON.parse(body).result.addressMatches[0].geographies["Census Blocks"][0].GEOID
      censusTract = Number(censusTract); //removes leading 0 from API call
      console.log('body:', censusTract); 

      res.send(JSON.stringify(censusTract));
  })
}

module.exports.getData = (req, res) => {
    Bookshelf.getData(req.body, res);
}

module.exports.getStateData = (req, res) => {
    Bookshelf.getStateData(req, res);
}

