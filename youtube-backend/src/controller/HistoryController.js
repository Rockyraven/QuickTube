const historyModel = require("../model/historyModel");
const videoModel = require("../model/videoModel");

exports.createHistory = async (req, res) => {
  const videoId = req.params.videoId;
  const userId = req.userId;
  try {
    const video = await videoModel.findById(videoId);
    if (!video) {
      throw { error: "there is no video" };
    }
    const existHistory = await historyModel.findOne({ videoId: videoId });
    if (existHistory) {
      return res.status(400).json({ message: "user Already exist" });
    }
    const history = await historyModel.create({
      videoId: videoId,
      userId: userId,
    });
    if (!history) {
      throw { error: "Something went wrong" };
    }
    res.status(202).json({ messgae: "history created sucessfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: "something went wrong" });
  }
};

exports.getHistoryVideos = async (req, res) => {
  //   try {
  //     const history = await historyModel.find({ userId: req.userId });
  //     const videoIds = history.map(item => item.videoId);
  //     const videos = await videoModel.find({_id: [videoIds]})
  //     console.log(videos);
  //         // console.log(video);
  //         // if(video){
  //         //     videos.push(video);
  //         // }
  //         console.log(history.map(item => JSON.stringify(item.videoId)));
  //     res.status(200).json(history);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).json({ messgae: "something went wrong" });
  //   }

  try {
    const history = await historyModel.find({ userId: req.userId });
    res.status(200).json(history);
  } catch (error) {
    console.log(error);
    res.status(500).json({ messgae: "something went wrong" });
  }
};

exports.deleteHistory = async (req, res) => {
    const historyId = req.params.id;
    try {
        const history = await historyModel.findByIdAndRemove(historyId);
        res.status(202).json(history);
    } catch (error) {
        console.log(error);
        res.status(500).json({messgae: "something went wrong"});
    }
}

exports.deleteAllHistory = async  (req, res) => {
    // const history = await historyModel.find({userId: req.userId}).remove().exec();
    const history = await historyModel.findOneAndRemove({ userId: req.userId });
}
