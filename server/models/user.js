'use strict';
const {hashPassword} = require('../helpers/bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Nasa, {
        through: models.UserNasa
      })
    }

    fullName(){
      return this.first_name + ' ' + this.last_name
    }
    
  };
  User.init({
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email must be unique'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'Must be e-Mail format'
        }
      }
    },
    password:  {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6],
          msg: 'password must be more than 6 character'
        }
      }
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: (user) => {
        user.password = hashPassword(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};