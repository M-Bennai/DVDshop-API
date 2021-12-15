const express = require("express");
const app = express();
const router = require("./routes/index.js");

const cors = require("cors");

const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", router);
app.listen(port, () => {
  console.log(`bonjour vous etes sur le port ${port}`);
});
