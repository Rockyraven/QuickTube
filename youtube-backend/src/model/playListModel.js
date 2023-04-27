const mongoose = require("mongoose");
const userModel = require("./userModel");
const videoModel = require("./videoModel");

const playListSchema = mongoose.Schema({
    videos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: videoModel,
        default: []
    },
    playListName: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: userModel
    }
   
}, {timestamps: true}) 

/*{
    videosId = []
    playListNmae = String
    userId = mongooose schema array

} */

module.exports = mongoose.model("likes", likeSchema)