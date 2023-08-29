import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A topic must have a name"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "A topic must have a description"],
    maxlength: [
      350,
      "The description must have less than or equal to 350 characters",
    ],
  },
  imageUrl: {
    type: String,
    required: [true, "A topic must have an image"],
  },
});

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;
