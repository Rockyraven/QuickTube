const express = require("express");
const { getVideo } = require("../controller/VideoController");
const videoRouter = express.Router();

videoRouter.get("/", getVideo);

module.exports = videoRouter;