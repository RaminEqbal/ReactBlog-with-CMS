const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  secret: {
    type: String,
    required: true
  },
});
module.exports = User = mongoose.model("users", UserSchema);