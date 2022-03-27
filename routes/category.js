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
    getSingleCategory
} = require('../controllers/categoryController');

const Category = require('../models/Category');


router.get('/', getAllCategory);
router.post('/add', addCategory);
router.get('/parent', getAllParentCategory);
router.post('/update', getEditCategory);
router.post('/single', getSingleCategory);


module.exports = router;
