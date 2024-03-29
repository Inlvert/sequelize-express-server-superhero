'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Image.belongsToMany(models.Superhero, {
        through: 'superheros_to_images',
        foreignKey: 'imageId'
      })
    }
  }
  Image.init({
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    path: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Image',
    underscored: true,
    tableName: 'images'
  });
  return Image;
};