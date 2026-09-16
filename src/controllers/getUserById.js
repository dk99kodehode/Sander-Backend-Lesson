// sequelize dot sync

import sequelize from "../config/database.js";
import User from "../models/User.model.js";

export const getUserById = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findOne({
    where: {
      id: userId,
    },
  });

  res.status(200).json({
    data: user,
  });
};
