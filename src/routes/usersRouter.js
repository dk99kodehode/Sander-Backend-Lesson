import express from "express";
import { QueryTypes } from "sequelize";

// jest / yest? or vitetest or supertest
// controllers and middlewares
// mapbox
import { getAllUsers } from "../controllers/getAllUsers.js";
import { createUser } from "../controllers/createUser.js";
import { getUserById } from "../controllers/getUserById.js";
import { updateUser } from "../controllers/updateUser.js";
import { validate } from "../middlewares/validate.js";
import { deleteUser } from "../controllers/deleteUser.js";

// schemas
import { createUserSchema } from "../schemas/createuser.schema.js";
import { updateUserSchema } from "../schemas/updateuser.schema.js";

const router = express.Router();

router.post(`/`, validate(createUserSchema), createUser);

router.get(`/`, getAllUsers);

router.get(`/:userId`, getUserById);
router.patch(`/:userId`, updateUser);
router.delete(`/:userId`, deleteUser);

export default router;
