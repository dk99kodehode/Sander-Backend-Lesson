import sequelize from "../config/database.js";
import User from "../models/User.model.js";

/// cant be just Users
// SELECT * FROM Tables aka t_Users"
export const getAllUsers = async (req, res) => {
  const users = await User.findAll();

  res.status(200).json({
    data: users,
  });
};
