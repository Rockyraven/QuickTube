const mongoose = require("mongoose");

const historySchema = mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
   
}, {timestamps: true}) 

module.exports = mongoose.model("history", historySchema)