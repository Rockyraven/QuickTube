const express = require('express');
const auth = require('../middleware/auth');
const { creatPlayList, sendVideoToPlayList } = require('../controller/PlaylistController');
const playListRouter = express.Router();

// playListRouter.get('/', getPlayList);
playListRouter.post('/',creatPlayList);
playListRouter.post('/:playListId/:videoId', sendVideoToPlayList);

module.exports = playListRouter;
