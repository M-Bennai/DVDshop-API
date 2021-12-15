"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Producer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Producer.belongsToMany(models.Dvd, { through: "Producer_dvd" });
    }
  }
  Producer.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Producer",
    }
  );
  return Producer;
};
