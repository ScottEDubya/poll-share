const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    bio: String,
    profilePhoto: String
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;