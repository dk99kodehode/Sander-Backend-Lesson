import User from "../../models/User.model.js";
import bcrypt from "bcrypt";

export const signIn = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return res.status(401).json({
        message: "Invalid username or password",
      });
    }

    res.status(200).json({ message: "yippie log in " });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
