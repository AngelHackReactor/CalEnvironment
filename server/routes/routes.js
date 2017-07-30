const express = require('express');
const router = express.Router();
const path = require('path');
const controller = require('../controllers/controller.js');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../react-client/dist/index.html'));
});

router.get('/dashboard', controller.dashboard)
router.get('/landing', controller.landing)
router.get('/getCensusTract', controller.getCensusTract)

module.exports = router;
