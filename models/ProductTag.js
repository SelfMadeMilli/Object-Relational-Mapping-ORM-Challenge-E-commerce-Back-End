onst { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      typeof;DataTypes.Interger,
      allowNull: false,
      primaryKey; true,
      autoIncrement: true
  },

  product_id: {
    type:DataTypes.INTEGER,
    reference: {
      model: 'product'
      key: 'id'
    }     
  },

tag_id
   type:DataTypes.Integer.
reference: {
  model: 'tag'
  key: 'id'


}  
   }, 
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
