'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRocket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserRocket.belongsTo(models.User)
    }
  };
  UserRocket.init({
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    RocketId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    comment:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'UserRocket',
  });
  return UserRocket;
};