'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('powers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      superheroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: "superhero_id",
        references: {
          model: {
            tableName: 'superheros'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      superpowers: {
        type: Sequelize.STRING,
        allowNull: false
      },
      catchPhrase: {
        type: Sequelize.STRING,
        field: 'catch_phrase'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at'
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('powers');
  }
};