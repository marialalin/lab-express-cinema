//creamos una colección en la base de datos que se llama "movies". Mongoose automaticamente lo pone en plural
const mongoose = require("mongoose") // -> importamos mongoose

const Movie = mongoose.model("Movie", {
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],

} ) // -> creamos el modelo. el primer parámetro es el nombre de la colección. El segundo es un objecto {} con el esquema de datos con todos los campos que tiene

module.exports = Movie

