const mongoose = require("mongoose");

const likeSchema = mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
   
}, {timestamps: true}) 

module.exports = mongoose.model("likes", likeSchema)