// const express = require('express');
const path = require('path');
const fs = require('fs');

let movie = [];

// I really like how Maximillan uses this syntax 
exports.getMovie = (req, res, next) => {
	movie = JSON.parse(fs.readFileSync("model/movieLists.json"));
	res.render('pages/prove03/movie', {
		title: "prove03",
		path: "/prove03",
		movie: movie
	});
}