const http = require("http");
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Node App</title></head>");
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
    res.write("</html>");
    return res.end();
  }

  if(url === '/message' && method === 'POST'){
        //write code to receive data and parse that data
        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        //parse the data
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody); //parsedBody = key/value
            const message = parsedBody.split('=')[1];
            console.log(message);
            fs.writeFileSync('message.txt',message);
        });

        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Node App</title></head>");
  res.write("<body><h1>Good Night.... This is my last example....</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
