import express from "express";
import * as speakerController from "../controllers/speakerController.js";

const router = express.Router();

router
  .route("/")
  .post(speakerController.createSpeaker)
  .get(speakerController.getAllSpeakers);

export default router;
