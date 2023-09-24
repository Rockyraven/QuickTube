const mongoose = require("mongoose");
const userModel = require("./userModel");
const videoModel = require("./videoModel");



const playListSchema = mongoose.Schema({
    playListName: {
        type: String,
        required: true
    },
    videos: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: videoModel,
      },
   
}, {timestamps: true}) 

/*{
    videosId = []
    playListNmae = String
    userId = mongooose schema array

} */

module.exports = mongoose.model("playlist", playListSchema)



// const express = require('express');
// const mongoose = require('mongoose');

// const problemSchema = new mongoose.Schema({
//     title: String,
//     description: String,
//     // Add more fields as needed
//   });
  
// //   module.exports = mongoose.model('Problem', problemSchema);

// const playListSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     // Add fields for authentication (e.g., hashed password)
//     myList: [{ type: mongoose.Schema.Types.ObjectId, ref: problemSchema }],
//   });
  
//   module.exports = mongoose.model('list', playListSchema);


  