const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const flash = require('express-flash');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const moment = require('moment');
const multer  = require('multer');
const http = require('http');
const { Server } = require("socket.io");
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
app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

// SocketIO
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
});

// Flash
app.use(cookieParser('HELLOMOTHER'));
app.use(session({ cookie: { maxAge: 60000 }}));
app.use(flash());
// End Flash

// TinyMCE
app.use('/tinymce', express.static(path.join(__dirname, 'node_modules', 'tinymce')));
// End TinyMCE

// App Local Variables
app.locals.prefixAdmin = systemConfig.prefixAdmin;
app.locals.moment = moment;

// Nhung file tinh
app.use(express.static(`${__dirname}/public`));

// Routes
routeAdmin(app);
route(app);

app.get("*", (req, res) => {
  res.render("client/pages/errors/404", {
    pageTitle: "404 Not Found"
  })
})

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})