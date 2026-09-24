import bcrypt from "bcrypt";
import { addTicks } from "sequelize/lib/utils";
import sequelize from "../../config/database.js";
import user from "../../models/User.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    await user.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "user created",
    });
  } catch (err) {
    console.error("Error creating user:", err);

    res.status(500).json({
      message: "Error creating user",
      error: err.message,
    });
  }
};
