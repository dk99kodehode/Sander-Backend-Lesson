// npm install sequelize && tedious
// sequelize (trenger en tolker) is manual not really wanted you want sql
// tedious (tolker)

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mssql",
  },
);

export default sequelize;
