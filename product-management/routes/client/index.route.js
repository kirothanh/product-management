const categoryMiddleware = require("../../middlewares/client/category.middleware.js")

const homeRoutes = require("./home.route.js");
const productRoutes = require("./product.route.js");
const searchRoutes = require("./search.route.js");

module.exports = (app) => {
  app.use(categoryMiddleware.category)

  app.use('/', homeRoutes);
  
  app.use('/products', productRoutes);

  app.use('/search', searchRoutes);
}