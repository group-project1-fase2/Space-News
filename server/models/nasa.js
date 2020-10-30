'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nasa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Nasa.belongsToMany(models.User, {
        through: models.UserNasa
      })
    }
  };
  Nasa.init({
    title: DataTypes.STRING,
    explanation: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nasa',
  });
  return Nasa;
};