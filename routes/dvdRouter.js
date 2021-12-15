const { getDvds, addDvd } = require("../controller/dvdController");
const dvdRouter = require("express").Router();

dvdRouter.get("/dvds", async (req, res) => {
  const dvdList = await getDvds();
  res.status(200).json(dvdList);
});

dvdRouter.post("/createDvd", async (req, res) => {
  const newDvd = await addDvd(req.body);
  res.status(200).json(newDvd);
});

module.exports = dvdRouter;
