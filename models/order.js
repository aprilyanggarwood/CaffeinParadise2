// =============================================================
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Order extends Model {}

Order.init(
  {
    total: { type: DataTypes.DECIMAL(10, 2) },
    details: { type: DataTypes.TEXT },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "order",
  }
);

module.exports = Order;
