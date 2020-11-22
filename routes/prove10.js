const express = require('express');
const router = express.Router();

// Path to your JSON file, although it can be hardcoded in this file.
const dummyData = require('../models/avengers-data.json')

router.get('/', (req, res, next) => {
    res.render('prove10', {
        title: 'Prove10',
        path: '/prove10',
        data: dummyData
    });
});

router.get('/fetchAll', (req, res, next) => {
    res.json(dummyData);
});

router.post('/insert', (req, res, next) => {
/************************************************
 * INSERT YOUR WEB ENDPOINT CODE HERE
 ************************************************/
 let existingAvenger = false;
 let newAvenger = req.body.newavenger;

 // we need to check if there already exists an avenger
    for (let data of dummyData.avengers)
    {
        if (data.name === newAvenger)
            existingAvenger = true;
    }

    if (existingAvenger === false)
    {
        dummyData.avengers.push({name: name, superheroname: req.body.superheroname })
        console.log(dummyData);
    }

    res.direct('/prove10');
});

module.exports = router;




