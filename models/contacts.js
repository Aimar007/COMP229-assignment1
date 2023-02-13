/************************
COMPP229 Assignment 1
File Name: app.js
Student's Name: Guo Huang
Student ID: 301303940
Date: 2023-02-09
************************/


let mongoose = require('mongoose');

// create a model class
let contactsModel = mongoose.Schema({
    name: String,
    number: String,
    email: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('contact', contactsModel);