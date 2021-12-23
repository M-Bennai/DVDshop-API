const express = require("express");
const router = express.Router();

router.use("/dvd", require("./dvdRouter"));
router.use("/movie", require("./movieRouter"));
router.use("/actor", require("./actorRouter"));
router.use("/category", require("./categoryRouter"));
router.use("/user", require("./userRouter"));
// router.use("/roadmap", require("./roadMapRouter"));

module.exports = router;
