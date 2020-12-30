// Dependencies
// =============================================================
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Coffee extends Model {}

Coffee.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },

    img_url: DataTypes.STRING,

    cold_img_url: DataTypes.STRING,

    short_description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100],
      },
    },

    price_sm: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
    price_md: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
    price_lg: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0,
        max: 50,
      },
    },
    isHotDrink: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "coffee",
  }
);

module.exports = Coffee;
