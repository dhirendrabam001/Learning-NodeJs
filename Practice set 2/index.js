const http = require("http");


const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.setHeader("Content-tye", "text/html");
        res.write("<body><h1>Welcome to dhirendra calculator</h1></body>")
        res.write('<a href="/calculator">Go To Calculator</a>');
        return res.end();

    } else if (req.url.toLowerCase() === "/calculator") {
        res.setHeader("Content-type", "text/html");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Calculate Two Sum</title>
         </head>
         <body>
         <form action="/calculator-result" method="POST">
         <input type="text" name="num1" placeholder="Enter Number One"><br>
         <input type="text" name="num2" placeholder="Enter Number Two"><br>
         <button type="submit">Result</button>
        </form>
    
        </body>
        </html>
            `)
            return res.end();
    } else if(req.url === "/calculator-result" && req.method == "POST") {
        const bodyData = [];
        req.on("data", (chunk) => {
            bodyData.push(chunk);
            console.log(chunk);
            
        });
        req.on("end", () => {
            const bufferData = Buffer.concat(bodyData).toString();
            console.log(bufferData);
            const param = new URLSearchParams(bufferData);
            console.log(param);

            // First method convert object
            // const paramObj = {}
            // for(const [key,value] of param.entries()) {
            //     paramObj[key] = value;
            // }

            // Second Method
            const finalVal = Object.fromEntries(param);
            console.log(finalVal);

            const result = Number(finalVal.num1) + Number(finalVal.num2);
            console.log(result);

        res.setHeader("Content-type", "text/html");
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
         <body>
         <h1>The final sum is:${result}</h1>
        </body>
        </html>
            `);
            res.end();
        });
        
        
    } 

});

const PORT = 2001;
server.listen(PORT, () => {
    console.log(`Server Is Running http://localhost:${PORT}`);

});