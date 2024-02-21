'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ArticleTags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //! Define the association between the Article and the Tags through the ArticleTags which is a junction table
    static associate(models) {
      this.belongsTo(models.Article, {
        foreignKey: 'articleId',
      })
      this.belongsTo(models.Tags, {
        foreignKey: 'tagId',
      })
    }
  }
  ArticleTags.init({
    articleId: {
      type: DataTypes.INTEGER,
      references: {model: 'Articles', key: 'id'},
      onDelete: 'CASCADE'
    },
    tagId: {
      type: DataTypes.INTEGER,
      references: {model: 'Tags', key: 'id'},
      onDelete: 'CASCADE'
    }
  }, {
    sequelize,
    modelName: 'ArticleTags',
  });
  return ArticleTags;
};