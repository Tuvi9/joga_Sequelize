'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.changeColumn('ArticleTags', 'articleId', {
        type: Sequelize.INTEGER,
        references: {model: 'Articles', key: 'id'},
        onDelete: 'CASCADE'
      }),
      queryInterface.changeColumn('ArticleTags', 'tagId', {
        type: Sequelize.INTEGER,
        references: {model: 'Tags', key: 'id'},
        onDelete: 'CASCADE'
      })
    ])
  },

  down (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.dropTable('ArticleTags')
    ])
  }
};
