// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // TODO: define columns
id: {
  type:DataTypes.INTERGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true
},
product_name: {
  type:DataTypes.String,
  allowNull: false,
  
},
price: {
    type:DataTypes.DECIMAL (10,2),
    allowNull: false,
    validate: {
      isDecimal:true,
    }
  },
  
  stock: {
      type:DataTypes.INTERGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
 },   
 
 category_id: {
      type:DataTypes.INTEGER,
      allowNull: true,
      reference: {
        model: 'category'
        key: 'id'
      }
     },



// `stock`
 // Integer*
 // Doesn't allow null values.
 //Set as primary key.
 //Uses auto increment.

 //`category_id`
 //Integer.
 //References the 'Category' model's  'id'.
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product',
}
);

module.exports = Product;

