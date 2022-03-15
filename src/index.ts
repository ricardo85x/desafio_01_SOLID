import express from "express";

import { ErrorHandlingMiddleware } from "./middlewares/ErrorHandlingMiddleware";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use(ErrorHandlingMiddleware);

export { app };
