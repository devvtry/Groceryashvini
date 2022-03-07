const multer  = require('multer');
const upload = multer({ dest: '/../public/data/uploads/category/' });
const Category = require('../models/Category');
const {
  getCategory,
  getAndEditCategory,
} = require('../services/category-services');

const { addCategoryValidation,
  eidtCategoryValidation } = require('../utils/validation');

const validation = {
  addcategory: addCategoryValidation,
  editcategory: eidtCategoryValidation,

};
const handleValidation = (body, res, type) => {
  const { error } = validation[type](body);
  if (error) {
    throw Error(error.details[0].message);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const totalUsers = await getCategory({});

    return res.status(200).json({ data: totalUsers });
  } catch (err) {
    return res.status(400).json({ error_msg: err.message });
  }
};

const getAllParentCategory = async (req, res) => {
  try {
    const totalUsers = await Category.find({ parentId: { $ne: null } });

    return res.status(200).json({ data: totalUsers });
  } catch (err) {
    return res.status(400).json({ error_msg: err.message });
  }
};
const addCategory = async (req, res) => {

  try {
    await handleValidation(req.body, res, 'addcategory');
    //   Checking if the user is already in the db
    const emailExist = await Category.findOne({ name: req.body.name });

    if (emailExist) {
      return res.status(400).json({ error_msg: 'Category already exists' });
    }

    // Create a new user
    const user = new Category(req.body);

    const savedUser = await user.save();
    // Generate and send token

    // Send email using sendgrid here
    return res.status(201).json({ data: savedUser });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

const getEditCategory = async (req, res) => {

  try {
    await handleValidation(req.body, res, 'editcategory');
    //   Checking if the user is already in the db
    const emailExist = await Category.findOne({ name: req.body.name });

    if (emailExist) {
      return res.status(400).json({ error_msg: 'Category already exists' });
    }

    // Create a new user
    const { _id } = req.body;
    
   const user = await getAndEditCategory({ _id }, req.body);
   // const user = await Category.findOneAndUpdate({ _id }, req.body);


    // Generate and send token

    // Send email using sendgrid here
    return res.status(201).json({ data: user });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};


module.exports = {
  getAllCategory,
  addCategory,
  getAllParentCategory,
  getEditCategory
 
};
