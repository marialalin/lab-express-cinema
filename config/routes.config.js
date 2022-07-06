const express = require('express');

const router = express.Router();
const cinema = require("../controllers/movies.controllers")


router.get("/", cinema.index)
router.get("/movies", cinema.movies)
router.get("/detail/:id", cinema.detail)

module.exports = router;
