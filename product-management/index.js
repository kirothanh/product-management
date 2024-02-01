const express = require('express');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
require('dotenv').config();

const database = require("./config/database.js")

const systemConfig = require("./config/system.js")

const routeAdmin = require("./routes/admin/index.route.js");
const route = require("./routes/client/index.route.js");

database.connect();

const app = express();
const port = process.env.PORT;

app.use(methodOverride('_method'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Su dung thang pug
app.set('views', './views');
app.set('view engine', 'pug');

// Flash
app.use(cookieParser('HELLOMOTHER'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
// End Flash

// App Local Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;

// Nhung file tinh
app.use(express.static("public"));

// Routes
routeAdmin(app);
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})