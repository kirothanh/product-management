const express = require('express');
require('dotenv').config();

const route = require("./routes/client/index.route.js");

const app = express();
const port = process.env.PORT;

// Su dung thang pug
app.set('views', './views');
app.set('view engine', 'pug');

// Routes
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})