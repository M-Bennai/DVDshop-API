const { Movie } = require("../models");
const { v4: uuidv4 } = require("uuid");
console.log(Movie);

const movieController = {
  getMovies: async () => {
    const getMovies = await Movie.findAll();
    return getMovies;
  },
  addMovies: async (data) => {
    const id = uuidv4();
    const addMovies = await Movie.create({ id: id, ...data });
    return addMovies;
  },
};

module.exports = movieController;
