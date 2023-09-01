import mongoose from "mongoose";

const speakerSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, "A speaker must have an image"],
  },

  biography: {
    type: String,
    required: [true, "A speaker must have a biography"],
    maxlength: [
      1500,
      "The biography must have less than or equal to 1500 characters",
    ],
  },

  firstname: {
    type: String,
    required: [true, "A speaker must have a name"],
  },

  mobile_country_code: {
    type: String,
    required: [true, "A phone must have a country code"],
  },

  mobile_phone: {
    type: String,
    required: [true, "A speaker must have a phone number recorded"],
  },

  country_of_residence: {
    type: String,
    required: [true, "A speaker must have a country of residence"],
  },

  role: {
    type: String,
    default: 'General'
  },

  // awards_recognition: {
  //   type: String,
  //   maxlength: [250, "This must have less than or equal to 250 characters"],
  // },

  // publications: {
  //   type: String,
  //   maxlength: [250, "This must have less than or equal to 250 characters"],
  // },

  // languages_spoken: {
  //   type: String,
  //   maxlength: [250, "This must have less than or equal to 250 characters"],
  // },

  // travel_and_accomodation: {
  //   type: String,
  //   maxlength: [250, "This must have less than or equal to 250 characters"],
  // },

  // virtual_event: {
  //   type: String,
  //   maxlength: [250, "This must have less than or equal to 250 characters"],
  // },

  speaker_types: {
    type: Array,
    required: [true, "You must select at least one topic."],
  },
});

const Speaker = mongoose.model("Speaker", speakerSchema);

export default Speaker;
