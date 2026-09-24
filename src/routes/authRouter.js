import express from "express";

import { createUserSchema } from "../schemas/createuser.schema.js";
import { createUser } from "../controllers/auth/signUp.js";
import { signIn } from "../controllers/auth/signIn.js";
import { validate } from "../middlewares/validate.js";
import { refresh } from "../controllers/auth/refresh.js";

const router = express.Router();

router.post("/signup", validate(createUserSchema), createUser);
router.post("/signin", signIn);
router.post("/refresh", refresh);

export default router;
