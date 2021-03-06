"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Actor.belongsToMany(models.Dvd, {
        as: "PlaysIn",
        foreignKey: "ActorId",
        through: "Actor_dvd",
      });
    }
  }
  Actor.init(
    {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Actor",
    }
  );
  return Actor;
};
