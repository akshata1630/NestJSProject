var mongoose = require('mongoose'),
    Schema = mongoose.Schema

export const RoleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
}, { timestamps: true });
