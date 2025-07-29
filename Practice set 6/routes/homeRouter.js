const express = require("express");
const path = require("path");
const rootdir = require("../util/utilPath");

const userRouter = express.Router();

userRouter.get("/", (req,res,next) => {
     res.sendFile(path.join(rootdir, "views", "home.html"))
});

module.exports = userRouter;