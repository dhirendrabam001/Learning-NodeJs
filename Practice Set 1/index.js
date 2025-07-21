// Create the page that show navigation bar of myntra with the following links.
// 1-Home,
// 2-Men,
// 3-Wemon,
// 4-Kids,
// 5-Cart

// clicking on each page link should navigate to that page and welcome to dhirendra is show there

const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.setHeader("Content-type", "text/html");
        res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navagation bar</title>
</head>
<body>
    <div class="ul">
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women2">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
    </div>
</body>
</html>
            `)
        res.end();
        return;

    } else if(req.url === "/home") {
        res.write("<h1>Welcome to dhirendra website</h1>");
        return res.end();
    } else if(req.url === "/men") {
        res.write("<h1>Welcome to dhirendra website</h1>");
        return res.end();
    } else if(req.url === "/women2") {
        res.write("<h1>Welcome to dhirendra website</h1>");
        return res.end();
    } else if(req.url === "/cart") {
        res.write("<h1>Welcome to dhirendra website</h1>");
        return res.end();
    } else if(req.url === "/kids") {
        res.write("<h1>Welcome to dhirendra website</h1>");
        return res.end();
    } else {
        res.end("Page not found");
    }


});

const PORT = 2500;
server.listen(PORT, () => {
    console.log(`Server Is Running http://localhost:${PORT}`);

});