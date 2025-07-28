
const express = require("express");
const userRouter = express.Router();

userRouter.get("/", (req,res,next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Project Demo</title>
        </head>
        <body>
        <h1>Welcome To Our Project</h1>
        <a href="/add-data">Go to home</a>
        </body>
        </html>
        `);
});

module.exports = userRouter;