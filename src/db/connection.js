const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_URL);

sequelize.authenticate();

console.log("DB is working");

module.exports = sequelize;