"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Categories", {
      id: {
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
      },
      // DvdId: {
      //   allowNull: false,
      //   foreignKey: true,
      //   defaultValue: Sequelize.UUIDV4,
      //   type: Sequelize.UUID,
      //   references: {
      //     model: "Dvds",
      //     key: "id",
      //   },
      // },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Categories");
  },
};
