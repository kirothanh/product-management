const Product = require("../../models/product.model")
const ProductCategory = require("../../models/product-category.model")

const productsHelper = require("../../helpers/product");
const productsCategoryHelper = require("../../helpers/products-category");
const productHelper = require("../../helpers/product");


// [GET] /products
module.exports.index = async (req, res) => {
  try {
    const products = await Product.find({
      status: "active",
      deleted: false
    }).sort({ position: "desc" });
  
    const newProducts = productsHelper.priceNewProducts(products);
  
    res.render("client/pages/products/index.pug", {
      pageTitle: "Danh sách sản phẩm",
      products: newProducts
    });
  } catch (error) {
    console.log("Lỗi: " + error);
  }
}

// [GET] /products/:slugProduct
module.exports.detail = async (req, res) => {
  try {
    const find = {
      deleted: false,
      slug: req.params.slugProduct,
      status: "active"
    };

    const product = await Product.findOne(find);

    if(product.product_category_id) {
      const category = await ProductCategory.findOne({
        _id: product.product_category_id,
        status: "active",
        deleted: false
      })

      product.category = category;
    }

    product.priceNew = productHelper.priceNewProduct(product);

    res.render("client/pages/products/detail.pug", {
      pageTitle: product.title,
      product: product
    });
  } catch (error) {
    console.log(error);
    res.redirect(`/products`);
  }
}

// [GET] /products/:slugCategory
module.exports.category = async (req, res) => {
  const category = await ProductCategory.findOne({
    slug: req.params.slugCategory
  })

  const listSubCategory = await productsCategoryHelper.getSubCategory(category.id);

  const listSubCategoryId = listSubCategory.map(item => item.id);

  const products = await Product.find({
    product_category_id: { $in: [category.id, ...listSubCategoryId] },
    deleted: false
  }).sort({ position: "desc" })

  const newProducts = productsHelper.priceNewProducts(products);

  res.render("client/pages/products/index.pug", {
    pageTitle: category.title,
    products: newProducts
  });
}