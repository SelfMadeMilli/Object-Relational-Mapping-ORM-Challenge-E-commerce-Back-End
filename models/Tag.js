const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // TODO: define columns+
    // `id`
    // Integer.
    // Doesn't allow null values.
    // Set as primary key.
    // Uses auto increment.
    
    // 'tag_name'
    //  String. 
    
    id: {
      type;DataTypes.Interger,
      allowNull: false,
      primaryKey; true,
      autoIncrement: true   
    },

     tag_name: {
       type: DataTypes.STRING,
  },
 },
 {
     sequelize,
     timestamps: false,
     freezeTableName: true,
     underscored: true,
     modelName: 'tag',
 }
);

module.exports = Tag;
