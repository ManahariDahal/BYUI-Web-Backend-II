const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/prove01/form', { 
        title: 'Prove Assignment 02', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
});

router.post('/submit',(req, res, next) => {
    res.render('pages/prove01/display', { 
        title: 'Prove Assignment 02', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        title: req.body.title,
        summary: req.body.summary,
        date: req.body.date,
        authorName: req.body.authorName,
    });
});

module.exports = router;