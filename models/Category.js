const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // TODO: define columns
id: {
  type:DataTypes.INTERGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true
},

      catergory_name: {
  type:DataTypes.INTERGER,
  allowNull: false,
  
},

//   'id'
//     Integer.
//     Doesn't allow null values.
//     Set as primary key.
//     Uses auto increment.

//    `category_name`
//     String.
//     Doesn't allow null values.

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catergory'
  }
);

module.exports = Category;
