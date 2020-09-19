const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove01/form', { 
        title: 'Prove Assignment 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit',(req, res, next) => {
    res.render('pages/prove01/display', { 
        title: 'Prove Assignment 01', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        i1: req.body.input1,
        i2: req.body.input2,
    });
});

module.exports = router;