const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fs = require("fs");
const videos = require("./db/video");

const historyRouter = require("./router/historyRoutes");
const likeRouter = require("./router/likeRoutes");
const userRouter = require("./router/userRoutes");
const watchlaterRouter = require("./router/watchlaterRoutes");
const videoRouter = require("./router/videoRoutes");
const videoModel = require("./model/videoModel");

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log("HTTP MEthod - " + req.method + " , URL " + req.url);
  next();
});

app.use("/user", userRouter);
app.use("/history", historyRouter);
app.use("/watchlater", watchlaterRouter);
app.use("/like", likeRouter);
app.use("/video", videoRouter);

mongoose
  .connect(
    "mongodb+srv://youtube:youtube@cluster0.urxx7wc.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected ");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(5000, () => {
  console.log("Server is started");
});
