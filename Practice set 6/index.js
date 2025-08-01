const express = require("express");
const homeRouter = require("./routes/homeRouter");
const contactData = require("./routes/contactRouter");
const contactSucuss = require("./routes/contactSucuss");
const path = require("path");
const rootdir = require("./util/utilPath");
const app =  express();



app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactData);
app.use(contactSucuss);

app.use((req,res,next) => {
    res.sendFile(path.join(rootdir, "views", "error.html"))
})


const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server is running port number is:${PORT}`);
    
});