import Speaker from "../models/speakerModel.js";

export const createSpeaker = async (req, res) => {
  try {
    const newSpeaker = await Speaker.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        speaker: newSpeaker,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

export const getAllSpeakers = async (req, res) => {
  try {
    const speakers = await Speaker.find();

    if (speakers.length === 0) {
      return res.status(200).json({
        message: "No speaker exist",
      });
    }

    res.status(200).json({
      status: "success",
      results: speakers.length,
      data: {
        speakers,
      },
    });
    
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
