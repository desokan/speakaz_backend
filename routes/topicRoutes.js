import express from "express";
import * as topicController from "../controllers/topicController.js";

const router = express.Router();

router.route("/").post(topicController.createTopic);

export default router;
