import express from "express";
import swaggerUI from "swagger-ui-express";
import YAML from "yamljs";

import { ErrorHandlingMiddleware } from "./middleware/ErrorHandlingMiddleware";
import { usersRoutes } from "./routes/users.routes";

const swaggerFile = YAML.load("./src/swagger.yaml");

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.use(ErrorHandlingMiddleware);

export { app };
