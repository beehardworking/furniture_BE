const { DataTypes, Sequelize } = require("sequelize");
const { connection } = require("./connection");

const OrderDetail = connection.define(
  "orderdetail",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = OrderDetail;
