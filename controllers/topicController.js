import Topic from "../models/topicModel.js";

export const createTopic = async (req, res) => {
  try {
    const newTopic = await Topic.create(req.body);

    console.log("newTopic", newTopic);
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

export const getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();

    if (topics.length === 0) {
      return res.status(200).json({
        message: "No topic exist",
      });
    }

    res.status(200).json({
      status: "success",
      results: topics.length,
      data: {
        topics,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

