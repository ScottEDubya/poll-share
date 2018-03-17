const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    bio: String,
    dateOfBirth: String
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;