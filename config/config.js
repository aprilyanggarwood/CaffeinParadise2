require("dotenv").config();
module.exports = {
  development: {
    username: "i1b9qw4hyaa7h76b",
    password: "qs248kxdi51aszzr",
    database: "t1n7r71i650t701y",
    host: "l0ebsc9jituxzmts.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
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
