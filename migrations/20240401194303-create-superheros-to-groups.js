'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('superhero_to_groups', {
      superheroId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'superhero_id',
        primaryKey: true,
        references: {
          model: {
            tableName: 'superheros'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      groupId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        field: 'group_id',
        primaryKey: true,
        references: {
          model: {
            tableName: 'groups'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('superhero_to_groups')
  }
};
