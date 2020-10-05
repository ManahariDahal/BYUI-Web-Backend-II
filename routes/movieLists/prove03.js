const express = require('express')
const router = express.Router();

const controller = require('../../controller/list');
router.get("/", controller.getMovie);
// router.get("/:desc", controller.getMovieDesc);

// I was pulling my hair out because I forgot to export it
module.exports = router;

