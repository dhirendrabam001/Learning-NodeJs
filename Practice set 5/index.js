const express = require("express");
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");
const app = express();

app.use((req,res,next) => {
    console.log(req.url, req.method);
    next(); 
});



// 1st method
// app.use(express.urlencoded({extended: false}));

// Second method
app.use(express.urlencoded());
// userRouter
app.use(userRouter);
// hostrouters
app.use(hostRouter);







const PORT = 3200;
app.listen(PORT, () => {
    console.log(`Server Is Running Port Number Is:${PORT}`);
    
})
