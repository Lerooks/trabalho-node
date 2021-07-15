require('dotenv');

module.exports = {
  dialect: 'mysql',
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "trabalho_node",
  timezone: '-03:00',
  define: {
      timestamps: true,
  }
}