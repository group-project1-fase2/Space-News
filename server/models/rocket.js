'use strict';
const {
  Router
} = require('express');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Rocket.belongsToMany(models.User, {
      //   through: models.UserRocket,
      //   foreignKey: 'RocketId'
      // });
    }
  };
  Rocket.init({
    mission: {
      type: DataTypes.STRING,
      allowNull: false
    },
    launch: {
      type: DataTypes.STRING,
      allowNull: false
    },
    time_target: {
      type: DataTypes.DATE,
      allowNull: false
    },
    pad_location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    customerOrganization: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Rocket',
  });
  return Rocket;
};