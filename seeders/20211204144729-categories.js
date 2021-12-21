"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "Categories",
      [
        {
          CategoryId: uuidv4(),
          // dvdId: uuidv4(),
          name: "Science Fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   id: uuidv4(),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   dvd_id: uuidv4(),
        //   name: "Action",
        // },
        // {
        //   id: uuidv4(),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   dvd_id: uuidv4(),
        //   name: "Comedy",
        // },
        // {
        //   id: uuidv4(),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   dvd_id: uuidv4(),
        //   name: "Horror",
        // },
        // {
        //   id: uuidv4(),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   dvd_id: uuidv4(),
        //   name: "Sports",
        // },
        // {
        //   id: uuidv4(),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   dvd_id: uuidv4(),
        //   name: "Documentary",
        // },
        // {
        //   id: uuidv4(),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   dvd_id: uuidv4(),
        //   name: "New",
        // },
        // {
        //   id: uuidv4(),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        //   dvd_id: uuidv4(),
        //   name: "Family",
        // },
      ],

      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("Categories", null, {});
  },
};
