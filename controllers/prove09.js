const Product = require('../models/prove09');
const fetch = require('node-fetch');

const ITEMS_PER_PAGE = 10;
const pokemon = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=10';

let next;
let prev;


exports.myPokemon = (req, res, next) => {  
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
    .then(res => res.json())
    .then(pokRes => 
    {
        next = pokRes.next;
        prev = pokRes.previous;
        res.render('prove09.ejs', { 
        title: 'Prove 09', 
        path: '/prove09', 
        data: pokRes.results,
        pokemon: pokRes.results,
        hasNextPage: pokRes.next,
        hasPreviousPage: pokRes.previous
    })
})
    .catch(err => console.log(err));
};


exports.nextPokemon = (req, res, next) => { 
    fetch(next)
    .then(res => res.json())
    .then(pokRes => {
        next = pokRes.next;
        prev = pokRes.previous;
        res.render('prove09.ejs', { 
        title: 'Prove 09', 
        path: '/prove09', 
        data: pokRes.results,
        hasNextPage: pokRes.next,
        hasPreviousPage: pokRes.previous
    })
})
    .catch(err => console.log(err));
};

exports.prevPokemon = (req, res, next) => { 
    fetch(prev)
    .then(res => res.json())
    .then(pokRes => {
        next = pokRes.next;
        prev = pokRes.previous;
        res.render('prove09.ejs', { 
        title: 'Prove 09', 
        path: '/prove09',
        data: pokRes.results,
        hasNextPage: pokRes.next,
        hasPreviousPage: pokRes.previous
    })
})
    .catch(err => console.log(err));
};

