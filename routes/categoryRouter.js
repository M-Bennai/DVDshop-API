const {
  getCategories,
  addCategory,
} = require("../controller/categoryController");
const categoryRouter = require("express").Router();

categoryRouter.get("/all", async (req, res) => {
  const categoriesList = await getCategories();
  res.status(200).json(categoriesList);
});

categoryRouter.post("/create", async (req, res) => {
  const newCategory = await addCategory(req.body);
  res.status(200).json(newCategory);
});
// categoryRouter.post("/create", async (req, res) => {
//   console.log("req.body :>> ", req.body);
//   try {
//     const { category, dvd_id } = req.body;
//     const newCategory = await addCategory(category, dvd_id);
//     res.status(200).json({ msg: "success", newCategory });
//   } catch (error) {
//     console.log("error :>> ", error);
//     res.status(400).json({ msg: "an error was occured" });
//   }
// });

module.exports = categoryRouter;
