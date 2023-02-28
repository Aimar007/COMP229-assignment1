
let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

//connect to contact Model

let Contact = require('../models/contacts');




module.exports.displayContactList = (req, res, next) => {
    Contact.find((err, contactList) => {
        if (err) {
            return console.error(err);
        } else {
            res.render('contactlist/list', { title: 'Contact List', ContactList: contactList })
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('contactlist/add', { title: 'Add a Contact' });
};

module.exports.processAddPage = (req, res, next) => {
    let newContact = Contact({
        "contactName": req.body.contactName,
        "phoneNumber": req.body.phoneNumber,
        "emailAddress": req.body.emailAddress
    });
    Contact.create(newContact, (err, Contact) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contact-list');
        }
    });
};

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.render('contactlist/edit', { title: 'Contact List', contact: contactToEdit })
        }
    });
};

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updateContact = Contact({
        "_id": id,
        "contactName": req.body.contactName,
        "phoneNumber": req.body.phoneNumber,
        "emailAddress": req.body.emailAddress
    });
    Contact.updateOne({ _id: id }, updateContact, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contact-list');
        }
    })
}

module.exports.deleteContact = (req, res, next) => {
    let id = req.params.id;

    Contact.remove({ _id: id }, (err) => {
        if (err) {
            console.log(err);
            res.end(err);
        } else {
            res.redirect('/contact-list');
        }
    });
}