const express = require("express");
const path = require("path");
const contactRoute = express.Router();

// Import utils core module
const rootdir = require("../util/utilPath");

contactRoute.get("/contact-data", (req,res,next) => {
    
    
    res.sendFile(path.join(rootdir, "views", "contact-data.html"));

});



module.exports = contactRoute;