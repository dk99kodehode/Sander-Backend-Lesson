import { id } from "zod/locales";
import sequelize from "../../config/database.js";
import user from "../../models/User.model.js";
import { where } from "sequelize";

// stopper sql injections

// returns an array not an object
// so arguements have to be wrapped as an array

export const deleteUser = async (req, res) => {
  const { userId } = req.params;

  await User.destroy({
    where: {
      id: userId,
    },
  });

  res.status(200).json({
    data: user,
  });
};
