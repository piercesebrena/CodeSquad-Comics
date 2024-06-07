const mongoose = require("mongoose");

const { Schema } = mongoose;


const userSchema= new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    strategy: {
        type: String
    }
});

// Export the user schema
const User = mongoose.model('User', userSchema);

module.exports = User
