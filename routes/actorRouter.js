const { getActors, addActor } = require("../controller/dvdController");
const actorRouter = require("express").Router();

actorRouter.get("/actors", async (req, res) => {
  const actorsList = await getActors();
  res.status(200).json(actorsList);
});

actorRouter.post("/createActor", async (req, res) => {
  const newActor = await addActor(req.body);
  res.status(200).json(newActor);
});

module.exports = actorRouter;
