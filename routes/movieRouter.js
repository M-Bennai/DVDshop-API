const { getMovies, addMovies } = require("../controller/movieController");
const movieRouter = require("express").Router();

movieRouter.get("/movies", async (req, res) => {
  const moviesList = await getMovies();
  res.status(200).json(moviesList);
});

movieRouter.post("/createMovie", async (req, res) => {
  const newMovie = await addMovie(req.body);
  res.status(200).json(newMovie);
});

module.exports = movieRouter;
