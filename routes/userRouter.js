const userRouter = require("express").Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const { addUser } = require("../controller/userController");
const validateToken = require("../middleware/authMiddleware");

userRouter.post("/register", async (req, res) => {
  const { firstName, lastName, address, email, password, role } = req.body;
  console.log("req.body :>> ", req.body);
  try {
    const findUser = await User.findOne({ where: { email: email } });
    if (!findUser) {
      const encryptedPassword = await bcrypt.hash(password, 10);
      console.log("encryptedPassword :>> ", encryptedPassword);
      const newUser = await addUser({
        firstName,
        lastName,
        address,
        email,
        password: encryptedPassword,
        role,
      });
      console.log("newUser :>> ", newUser);
      res.status(201).json({ msg: "User added succesfully", newUser });
    } else {
      res.status(400).json({ msg: "User already exit" });
    }
    console.log("req.body :>> ", req.body);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(401).json({ message: "can't register" });
  }
});

userRouter.get("/auth", validateToken, async (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("error :>> ", error);
    res.status(400).json({ msg: "an error was occured" });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    if (!user) {
      res.status(400).json({ msg: "No user with that email" });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      res.status(400).json({ msg: "Wrong email or password" });
    } else {
      const accessToken = await jsonwebtoken.sign(
        {
          email: user.email,
          role: user.role,

          id: user.id,
        },
        process.env.JWT_SECRET
      );
      console.log("req.user :>> ", req.user);
      res.status(200).json({ msg: "You logged in", token: accessToken, user });
    }
  } catch (error) {
    console.log("error :>> ", error);

    res.status(400).json({ msg: "An error was occured", error: error });
  }
});

userRouter.post("/logout", /* authToken */ (req, res) => {});

userRouter.get("/all", async (req, res) => {
  const allUser = await User.findAll();
  res.status(200).json(allUser);
});

module.exports = userRouter;
