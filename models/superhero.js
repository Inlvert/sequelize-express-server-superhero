'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Superhero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Superhero.hasMany(models.Power, {
        foreignKey: 'superheroId'
      });

      Superhero.belongsToMany(models.Group, {
        through: 'superhero_to_groups',
        foreignKey: 'superheroId'
      })
    }
  }
  Superhero.init({
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    realName: {
      type: DataTypes.STRING,
      field: 'real_name'
    },
    originDescription: {
      type: DataTypes.TEXT,
      field: 'origin_description'
    }
  }, {
    sequelize,
    modelName: 'Superhero',
    underscored: true,
    tableName: 'superheros'
    
  });
  return Superhero;
};