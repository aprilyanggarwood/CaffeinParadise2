require("dotenv").config();
const Sequelize = require("sequelize");

// let sequelize;

// if (process.env.JAWSDB_URL) {
//   sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//   sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//       host: process.env.HOST || "localhost",
//       dialect: "mysql",
//       port: 3306,
//     }
//   );
// }

module.exports = sequelize;
module.exports = {
  development: {
    username: "i1b9qw4hyaa7h76b",
    password: "qs248kxdi51aszzr",
    database: "t1n7r71i650t701y",
    host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  test: {
    username: "i1b9qw4hyaa7h76b",
    password: "qs248kxdi51aszzr",
    database: "t1n7r71i650t701y",
    host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  production: {
    // username: "i1b9qw4hyaa7h76b",
    // password: "qs248kxdi51aszzr",
    // database: "t1n7r71i650t701y",
    // host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    use_env_variable: "JAWSDB_URL",
    dialect: "mysql",
  },
};
