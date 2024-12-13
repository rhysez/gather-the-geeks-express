module.exports = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: "gtg_development",
    host: process.env.POSTGRES_HOST,
    dialect: "postgres"
  },
  // test: {
  //   username: "root",
  //   password: null,
  //   database: "gtg_test",
  //   host: "127.0.0.1",
  //   dialect: "postgres"
  // },
  // production: {
  //   username: "root",
  //   password: null,
  //   database: "gtg_production",
  //   host: "127.0.0.1",
  //   dialect: "postgres"
  // }
}
