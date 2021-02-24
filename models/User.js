const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  experience: {
    type: String, // novice or expert
    required: true,
  },
  avatar_url: {
    type: String,
    default:
      "https://cdn.discordapp.com/attachments/791677756768518144/814105866315497482/image_9.png",
  },
  github: String,
  linkedin: String,
  about: String,
  skills: [String], // Java, Python, C++, UX/UI, HTML/CSS, Arduino, Processing, Mechanics, Circuits, Conceptual Design, User Testing, Software Testing, Wireframing
  project_ids: [String],
  password: {
    type: String,
    required: true,
  },
  register_date: {
    type: Date,
    default: Date.now(),
  },
});

// module.exports = User = mongoose.model("User", UserSchema);
module.exports = {
  User: mongoose.model("User", UserSchema),
  UserSchema: UserSchema,
};
