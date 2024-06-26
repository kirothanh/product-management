const ProductCategory = require("../../models/product-category.model");

const systemConfig = require("../../config/system");

const createTreeHelper = require("../../helpers/createTree")

const filterStatusHelper = require("../../helpers/filterStatus");
const searchHelper = require("../../helpers/search");

// [GET] /admin/products-category
module.exports.index = async (req, res) => {

  // Bộ lọc
  const filterStatus = filterStatusHelper(req.query)

  let find = {
    deleted: false,
  }

  if (req.query.status) {
    find.status = req.query.status;
  }

  // Tim kiem
  const objectSearch = searchHelper(req.query)

  if (objectSearch.regex) {
    find.title = objectSearch.regex
  }

  const records = await ProductCategory.find(find);

  const newRecords = createTreeHelper.tree(records);

  res.render("admin/pages/products-category/index.pug", {
    pageTitle: "Danh mục sản phẩm",
    records: newRecords,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword
  });
}

// [PATCH] /admin/products-category/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const id = req.params.id;

  await ProductCategory.updateOne({ _id: id }, { status: status });

  req.flash('success', 'Cập nhật trạng thái thành công!');

  res.redirect("back");
}

// [PATCH] admin/products-category/change-multi
module.exports.changeMulti = async (req, res) => {
  try {
    const type = req.body.type;
    const ids = req.body.ids.split(", ");
    const updatedBy = {
      account_id: res.locals.user.id,
      updatedAt: new Date()
    }

    switch (type) {
      case "active":
        await ProductCategory.updateMany(
          { _id: { $in: ids } },
          {
            status: "active",
            $push: { updatedBy: updatedBy }
          }
        )
        req.flash('success', `Cập nhật trạng thái thành công ${ids.length} danh mục sản phẩm !`);
        break
      case "inactive":
        await ProductCategory.updateMany(
          { _id: { $in: ids } },
          {
            status: "inactive",
            $push: { updatedBy: updatedBy }
          }
        )
        req.flash('success', `Cập nhật trạng thái thành công ${ids.length} danh mục sản phẩm !`);
        break
      case "delete-all":
        await ProductCategory.updateMany(
          { _id: { $in: ids } },
          {
            deleted: true,
            deletedBy: {
              account_id: res.locals.user.id,
              deletedAt: new Date()
            }
          }
        );
        req.flash('success', `Đã xóa thành công ${ids.length} danh mục sản phẩm !`);
        break;
      case "change-position":
        for (const item of ids) {
          let [id, position] = item.split("-");
          position = parseInt(position);

          // console.log('id',id);
          // console.log('position',position);

          try {
            await ProductCategory.updateOne({ _id: id.trim() }, {
              position: position,
              $push: { updatedBy: updatedBy }
            });
          } catch (error) {
            console.log(error);
          }

          req.flash('success', `Đã đổi vị trí thành công ${ids.length} danh mục sản phẩm !`);
        }
        break;
      default:
        break;
    }

    res.redirect("back")
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

// [GET] /admin/products-category/create
module.exports.create = async (req, res) => {
  let find = {
    deleted: false
  }

  const records = await ProductCategory.find(find);

  const newRecords = createTreeHelper.tree(records);

  res.render("admin/pages/products-category/create.pug", {
    pageTitle: "Tạo danh mục sản phẩm",
    records: newRecords
  });
}

// [POST] /admin/products-category/create
module.exports.createPost = async (req, res) => {
  // const permissions = res.locals.role.permissions;

  // if(permissions.includes("product-category_create")) {

  // } else {
  //   res.send("403");
  //   return;
  // }


  if (req.body.position == "") {
    const count = await ProductCategory.countDocuments();
    req.body.position = count + 1;
  } else {
    req.body.position = parseInt(req.body.position);
  }

  const record = new ProductCategory(req.body);
  await record.save();

  res.redirect(`${systemConfig.prefixAdmin}/products-category`)
}

// [GET] /admin/products-category/edit/:id
module.exports.edit = async (req, res) => {
  try {
    const id = req.params.id;

    const find = {
      _id: id,
      deleted: false
    }

    const data = await ProductCategory.findOne(find);

    const records = await ProductCategory.find({
      deleted: false
    });

    const newRecords = createTreeHelper.tree(records);

    res.render("admin/pages/products-category/edit.pug", {
      pageTitle: "Chỉnh sửa danh mục sản phẩm",
      data: data,
      records: newRecords
    });
  } catch (error) {
    res.redirect(`${systemConfig.prefixAdmin}/products-category`)
  }
}

// [PATCH] /admin/products-category/edit/:id
module.exports.editPatch = async (req, res) => {
  const id = req.params.id;

  req.body.position = parseInt(req.body.position);

  try {
    await ProductCategory.updateOne({ _id: id }, req.body);
    req.flash('success', `Cập nhật danh mục thành công!`);
  } catch (error) {
    req.flash('error', `Cập nhật danh mục thất bại!`);
  }

  res.redirect("back")
}