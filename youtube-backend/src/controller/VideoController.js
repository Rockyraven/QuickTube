const videoModel = require("../model/videoModel");

exports.getVideo = async (req,res) => {
    try {
        const videos = await videoModel.find({});
        res.status(200).json(videos);
      } catch (error) {
        console.log(error);
        res.status(500).json({ messgae: "something went wrong" });
      }
}