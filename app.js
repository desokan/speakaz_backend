import express from "express";
import morgan from "morgan";
import { requestTime } from "./middleware/reqMiddleware.js";
import topicRouter from "./routes/topicRoutes.js";

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(requestTime);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/topics", topicRouter);

// ROUTES

export default app;
