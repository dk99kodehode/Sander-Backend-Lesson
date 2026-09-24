import express from "express";
import { QueryTypes } from "sequelize";

// jest / yest? or vitetest or supertest
// controllers and middlewares
// mapbox
import { getAllUsers } from "../controllers/users/getAllUsers.js";
import { getUserById } from "../controllers/users/getUserById.js";
import { updateUser } from "../controllers/users/updateUser.js";
import { validate } from "../middlewares/validate.js";
import { deleteUser } from "../controllers/users/deleteUser.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get(`/`, authMiddleware, getAllUsers);

router.get(`/:userId`, getUserById);
router.patch(`/:userId`, updateUser);
router.delete(`/:userId`, deleteUser);

export default router;
