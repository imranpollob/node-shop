const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/products', (req, res, next) => {
  res.send('asdf');
  console.log(req.body);
});

app.use('/', (req, res, next) => {
  res.send('<form action="/products" method="post">'
    + '<input name="age" type="number"/>'
    + '<input type="submit" value="Submit"/>'
    + '</form>');
});


app.use('/', (req, res, next) => {
  console.log('i a2436578m here');
});

server.listen(3005);
