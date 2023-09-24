const express = require("express");
const playListModel = require("../model/playListModel");
const videoModel = require("../model/videoModel");

// const getPlayList = async(req,res) => {
//     try {
//         const playList = await playListModel.find({});
  
//       res.status(200).json(playList);
//       } catch (error) {
//         console.log(error);
//         res.status(500).json({ messgae: "something went wrong" });
//       }
// }

exports.creatPlayList = async (req, res) => {
  const { playListName, video } = req.body;
  console.log({playListName, video});
  try {
    const existingPlaylist = await playListModel.findOne({playListName: playListName});
    console.log(existingPlaylist);
    if(existingPlaylist){
        return res.status(400).json({message: "PlayList Already present"});
    }
    const result = await playListModel.create({
      playListName: playListName,
      videos: video,
    });
    res.status(201).json({ result });
  } catch (error) {
    console.log(error);
    res.status(201).json({ message: "something went wrong" });
  }
};

exports.sendVideoToPlayList = async (req, res) => {
    const playListId = req.params.playListId;
    const videoId = req.params.videoId;
    // console.log(playListId, videoId);
    try {
        const findPlayList = await playListModel.findById(playListId);
        const video =  await videoModel.findById(videoId);
        // console.log(findPlayList.video, video);
        const final = findPlayList.video.push([video]);
        console.log(final, [video]);
        res.status(201).json({final})
    } catch (error) {
        
    }
}




// module.exports = {creatPlayList};
