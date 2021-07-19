module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST ?? '127.0.0.1',
  port: process.env.MYSQL_LOCAL_PORT ?? '3306',
  username: process.env.MYSQL_USERNAME ?? 'root',
  password: process.env.MYSQL_ROOT_PASSWORD ?? '',
  database: process.env.MYSQL_DATABASE ?? 'trabalho_node',
  timezone: '-03:00',
  define: {
      timestamps: true,
  }
}