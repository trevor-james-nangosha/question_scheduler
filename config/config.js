require("dotenv").config()
const {DB_USER_NAME, DB_PASSWORD, DB_NAME, DB_HOST} = process.env

module.exports = {
  development: {
    username: DB_USER_NAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres"
  },

  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql"
  },

  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql"
  }
}
