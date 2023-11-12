'use strict';
const Post = require('./event.js')
const Express = require('express');
const cors = require('cors')
const app = new Express();
const router = require('./router.js');
const bodyParser = require('body-parser');
app.use(cors());
app.use(Express.json());
app.use(router);
app.use(bodyParser.json())


const port = 3001;

app.listen(port, () => {
  console.log(`Server runs on ${port}`);
});