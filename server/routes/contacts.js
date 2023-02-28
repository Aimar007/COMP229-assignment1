
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

//connect to contacts Model
let Contact = require('../models/contacts');
let contactController = require('../controllers/contact');

//helper function for guard purposes
function requireAuth(req, res, next)
{
    //check if the user is logged in
    if (!req.isAuthenticated())
    {
        return res.redirect('/login')
    }
    next();
}

/* GET route for contacts */
router.get('/', contactController.displayContactList);


/* GET route for contact List page - CREATE Operation*/
router.get('/add', requireAuth, contactController.displayAddPage);

/* POST route for contact List page - CREATE Operation*/
router.post('/add', requireAuth, contactController.processAddPage);

/* GET route for contact List page - UPDATE Operation*/
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

/* POST route for contact List page - UPDATE Operation*/
router.post('/edit/:id',requireAuth, contactController.processEditPage);

/* GET route for contact List page - DELETE Operation*/
router.get('/delete/:id', requireAuth, contactController.deleteContact);

module.exports = router;