const express = require("express");
const auth = require("../middleware/auth");
const {getHistoryVideos, createHistory, deleteHistory, deleteAllHistory} = require("../controller/HistoryController")
const historyRouter = express.Router();

historyRouter.get("/",auth, getHistoryVideos);
historyRouter.post("/:videoId", auth, createHistory)
historyRouter.delete("/:id", auth, deleteHistory)
// historyRouter.delete("/deleteall",auth, deleteAllHistory)

module.exports = historyRouter;

 