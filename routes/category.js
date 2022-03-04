const router = require('express').Router();
const {
  verifiedFunction: ensureAuth,
  checkAdmin
} = require('./verifyJwtToken');
const {
    getAllCategory,
    addCategory,
    getAllParentCategory
} = require('../controllers/categoryController');

const Category = require('../models/Category');


router.get('/', getAllCategory);
router.post('/add', addCategory);
router.get('/parent', getAllParentCategory);


module.exports = router;
