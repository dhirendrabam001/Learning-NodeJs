const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-data", (req,res,next) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Project Demo</title>
        </head>
        <body>
        <h2>Register Your All Details</h2>
        <form action="#" method="POST">
        <input type="text" name="housename" placeholder="Enter Your House Name" required/>
        <button type="submit">Send</button>
        </form>
        </body>
        </html>
        `);
});

hostRouter.post("/add-data", (req,res,next) => {
    console.log(req.body);
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body>
        <h2>Home Register Sucussfully</h2>
        <a href="/">Back to home</a>
        
        </body>
        </html>
        `);

});


module.exports = hostRouter;