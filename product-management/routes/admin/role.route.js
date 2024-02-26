const express = require('express');
const router = express.Router();

const controller = require("../../controllers/admin/role.controller");

router.get('/', controller.index);

router.get('/create', controller.create);

router.post('/create', controller.createPost);


module.exports = router;