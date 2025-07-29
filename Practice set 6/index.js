const express = require("express");
const homeRouter = require("./routes/homeRouter");
const contactData = require("./routes/contactRouter");
const contactSucuss = require("./routes/contactSucuss");
const app =  express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactData);
app.use(contactSucuss);




app.post("/contact-data", (req,res,next) => {
    const bodydata = req.body;
    console.log(bodydata);
    
})




const PORT = 2000;
app.listen(PORT, () => {
    console.log(`Server is running port number is:${PORT}`);
    
});