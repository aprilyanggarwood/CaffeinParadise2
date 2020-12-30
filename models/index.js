const Order = require("./order");
const User = require("./user");
const Coffee = require("./caffeinParadise");

User.hasMany(Order, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Order.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { Order, User, Coffee };
