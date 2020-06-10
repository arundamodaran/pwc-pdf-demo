var express = require('express');
const fs = require('fs');
const path = require('path');
const pdfservice = require('../services/pdfservice');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const data = {
    OrdinaryShare: '122',
    InstCode: 'PWCD',
    ReportingCycle: '11/2020'
  };
  pdfservice.fillMas1Form(data, (err, results) => {
    if (err) {
      throw err;
    }
    console.log('success');
    res.render('index', { title: 'Express' });

  });

});

module.exports = router;
