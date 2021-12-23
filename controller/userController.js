const { User } = require("../models");
const { v4: uuidv4 } = require("uuid");

const userController = {
  addUser: async ({ firstName, lastName, address, email, password, role }) => {
    if (role === "admin") {
      const newUserAdmin = await User.create({
        id: uuidv4(),
        firstName,
        lastName,
        email,
        password,
        role,
      });
      return newUserAdmin;
    } else if (role === "client") {
      const newUserClient = await User.create({
        id: uuidv4(),
        firstName,
        lastName,
        address,
        email,
        password,

        role,
      });
      return newUserClient;
    } else {
      return "ne peut pas creer ce type de profil";
    }
  },
};

module.exports = userController;
