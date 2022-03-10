const router = require('express').Router();
const {
  verifiedFunction: ensureAuth,
  checkAdmin
} = require('./verifyJwtToken');
const {
    getAllProduct,
    addProduct,
    getAllParentCategory,
    getEditProduct,
    getSingleProduct
} = require('../controllers/productController');

const Product = require('../models/Product');


router.get('/', getAllProduct);
router.post('/add', addProduct);
router.post('/update', getEditProduct);
router.post('/single', getSingleProduct);
// router.post('/active-inactive', getSingleProduct);


module.exports = router;
