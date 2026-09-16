import { addTicks } from "sequelize/lib/utils";
import sequelize from "../config/database.js";
import user from "../models/User.model.js";

export const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await user.create({
      username,
      email,
      password,
    });

    res.status(201).json({
      message: "user created",
    });
  } catch (err) {
    console.log("error creating user:", err);

    return res.status(500).json({
      error: "something went wrong",
    });
  }
};
