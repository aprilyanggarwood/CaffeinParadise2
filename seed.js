const db = require("./models");
const sequelize = require("./config/connection");
const seedData = require("./seedData.json");

sequelize
  .sync({ force: true })
  .then(() => {
    db.Coffee.bulkCreate(seedData)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));
