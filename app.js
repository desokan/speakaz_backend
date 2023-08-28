import express from "express";
import morgan from "morgan";
import topicRouter from "./routes/topicRoutes.js";
import cors from "cors";
import rateLimiter from "express-rate-limit";

const app = express();

const limiter = rateLimiter({
  max: 100,
  windowMs: 60 * 1000,
});

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(limiter);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/topics", topicRouter);

// ROUTES

export default app;
