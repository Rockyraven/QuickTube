const express = require("express");
const { createLike, deleteLike } = require("../controller/LikeController");
const auth = require("../middleware/auth");
const likeRouter = express.Router();

// likeRouter.get("/",auth, createLike);
likeRouter.post("/:videoId", auth, createLike)
likeRouter.delete("/:videoId", auth, deleteLike)

module.exports = likeRouter;

