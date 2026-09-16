import sequelize from "../config/database.js";
import { QueryTypes } from "sequelize";

export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { username, email } = req.body;

  const user = await sequelize.query(
    `
    UPDATE t_users
    SET username = :username, email= :email
    WHERE userId = :userId `,
    {
      replacements: {
        userId,
        username,
        email,
      },
      type: QueryTypes.UPDATE,
    },
  );

  res.status(200).json({
    data: user,
  });
};
