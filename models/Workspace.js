const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const { UserSchema } = require("./User");
const WorkspaceSchema = Schema({
  // name of room
  name: {
    type: String,
    required: true,
  },
  unique_name: {
    type: String,
    required: true,
    unique: true,
  },
  // id of all users who are admins
  admin_users: [UserSchema],
  // id of all users part of the room
  users: [UserSchema],
  // created by which user
  created_by_user: { type: UserSchema },
  created_date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Workspace = mongoose.model("Workspace", WorkspaceSchema);
