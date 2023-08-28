import express from "express";
import * as topicController from "../controllers/topicController.js";

const router = express.Router();

router.route("/").get(topicController.getAllTopics).post(topicController.createTopic);

export default router;
