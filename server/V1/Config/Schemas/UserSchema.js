const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        role: { type: String, required: true, enum: ['admin', 'user'], default: 'user' },
        companyName: String,
    },
    {
        timestamps: true
    },
);

const User = model('User', userSchema);
module.exports = User;