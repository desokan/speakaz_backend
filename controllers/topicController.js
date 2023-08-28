import Topic from "../models/topicModel.js";

export const createTopic = async (req, res) => {
  try {
    const newTopic = await Topic.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        topic: newTopic,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
