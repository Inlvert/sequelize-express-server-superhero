'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Power extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Power.belongsTo(models.Superhero, {
        foreignKey: 'superheroId'
      })
    }
  }
  Power.init({
    superpowers: {
      type: DataTypes.STRING,
      allowNull: false
    },
    catchPhrase: {
      type: DataTypes.STRING,
      field: 'catch_phrase'
    }
  }, {
    sequelize,
    modelName: 'Power',
    underscored: true,
    tableName: 'powers'
  });
  return Power;
};