import user from "../../models/User.model";

export const refresh = async (req, res) => {
  const { refreshToken } = req.body;

  const storedToken = await RefreshToken.findOne({
    where: {
      token: refreshToken,
    },
  });

  if (!storedToken) {
    return res.status(401).json({
      message: "invalid refresh token",
    });
  }

  // delete expired Tokens
  if (storedToken.expiresAt < new Date()) {
    await storedToken.destroy();
    return res.status(401).json({
      message: "Invalid refresh token",
    });
  }

  const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

  const user = await user.findByPk(decoded.id);
  if (!user) {
    return res.status(401).json({
      message: "Invalid user account",
    });
  }

  // Remove old refresh token
  await storedToken.destroy();

  // Create new access and refresh token
  const newAccessToken = createAccessToken(user);
  const newRefreshToken = await createRefreshToken(user);

  return res.json({
    message: "Made new tokens",
    data: {
      newAccessToken,
      newRefreshToken,
    },
  });
};
