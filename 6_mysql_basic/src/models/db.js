const { Sequelize } = require("sequelize");


const sqlz = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
)

const db = {}
db.Sequelize = Sequelize
db.sqlz = sqlz;
db.User = require('./User')(sqlz, Sequelize)

module.exports = db