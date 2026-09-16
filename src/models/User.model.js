import { id } from "zod/locales";
import sequelize from "../config/database.js";
import { DataTypes, NUMBER } from "sequelize";
import { email, uuid } from "zod";

// default value gjør ting før deg

const user = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default user;
