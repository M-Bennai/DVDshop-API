"use strict";
const { Model } = require("sequelize");
const producer = require("./producer");
module.exports = (sequelize, DataTypes) => {
  class Dvd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Dvd.belongsToMany(models.Actor, {
        as: "Dvd",
        foreignKey: "DvdId",
        through: "asActor",
      });
      models.Dvd.hasOne(models.Producer);
      models.Dvd.belongsTo(models.Category);
    }
  }
  Dvd.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
      stock: DataTypes.STRING,
      release_date: DataTypes.STRING,
      rating: DataTypes.STRING,
      CategoryId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Dvd",
    }
  );
  return Dvd;
};
