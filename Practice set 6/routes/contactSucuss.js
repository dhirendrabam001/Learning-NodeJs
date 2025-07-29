const express = require("express");
const contactSucuss = express.Router();
const path = require("path");

const rootdir = require("../util/utilPath");

contactSucuss.post("/contact-data", (req,res,next) => {
    res.sendFile(path.join(rootdir, "views", "contact-sucuss.html"));
});

module.exports = contactSucuss;