import 'dotenv/config'

const {POSTGRES_HOST, POSTGRES_USER, POSTGRES_PASSWORD} = process.env;

const config = {
  development: {
    username: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    database: "gtg_development",
    host: POSTGRES_HOST,
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

export default config;
