const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  category: {
    type: String, // Geology, Molecular Chemistry, Physics, Biology, Robotics, Medicine, Mobile Devices, Video Games, Health and Wellness, Aerospace
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // TODO: image
});

module.exports = mongoose.model("Project", ProjectSchema);
