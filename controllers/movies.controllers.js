const Cinema = require("../models/Movie.model")

module.exports.index = (req, res, next) => {
    res.render("index")
}

module.exports.movies = (req, res, next) => {
    Cinema.find()
        .then(movies => res.render("movies", { movies }))
        .catch(err => console.log(`error`))
}

module.exports.detail = (req, res, next) => {
    Cinema.findById(req.params.id)
        .then(movie => res.render("detail", { movie } ))
        .catch(err => console.log(`error`))
}