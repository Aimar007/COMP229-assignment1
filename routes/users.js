/************************
COMPP229 Assignment 1
File Name: app.js
Student's Name: Guo Huang
Student ID: 301303940
Date: 2023-02-09
************************/


var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
