import "dotenv/config";
import express from "express";

import sequelize from "./config/database.js";
import usersRouter from "./routes/usersRouter.js";

const app = express();

app.use(express.json());

app.use("/users", usersRouter);

export default app;
