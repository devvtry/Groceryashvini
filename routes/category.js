const router = require('express').Router();
const {
  verifiedFunction: ensureAuth,
  checkAdmin
} = require('./verifyJwtToken');
const {
    getAllCategory,
    addCategory,
    getAllParentCategory,
    getEditCategory,
} = require('../controllers/categoryController');

const Category = require('../models/Category');


router.get('/', getAllCategory);
router.post('/add', addCategory);
router.get('/parent', getAllParentCategory);
router.post('/update', getEditCategory);


module.exports = router;
