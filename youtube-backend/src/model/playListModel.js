const mongoose = require("mongoose");

const playListSchema = mongoose.Schema({
    videoId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
   
}, {timestamps: true}) 

/*{
    videosId = []
    playListNmae = String
    userId = mongooose schema array

} */

module.exports = mongoose.model("likes", likeSchema)