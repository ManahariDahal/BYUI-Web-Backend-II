const express = require('express');
const router = express.Router();
router.get('/',(req, res, next) => {
    res.render('pages/prove02/form', { 
    });
    return res.end();
});

router.post('/submit',(req, res, next) => {
    res.render('pages/prove02/display', { 
        title: req.body.title,
        summary: req.body.summary,
        date: req.body.date,
        authorName: req.body.authorName,
    });
    res.redirect('pages/prove02/form');
});


module.exports = router;