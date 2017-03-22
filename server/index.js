var express = require('express');
var app = express();
var path = require('path');
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../src/')));

// app.get('/', (req, res) => {
//   res.status(200).send()
// })

app.listen(3000);