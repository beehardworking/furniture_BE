const { DataTypes, Sequelize } = require("sequelize");
const { connection } = require("./connection");

const CommentProduct = connection.define(
  "commentproduct",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = CommentProduct;
