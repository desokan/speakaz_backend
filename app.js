import express from "express";
import morgan from "morgan";
import { getPublicPath } from "./utils/pathUtils.js";

const app = express();

// MIDDLEWARES
app.use(express.static(getPublicPath()));
app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

export default app;
