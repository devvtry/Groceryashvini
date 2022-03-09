const multer  = require('multer');
const upload = multer({ dest: '/../public/data/uploads/product/' });
const Product = require('../models/Product');
const {
  getAndEditProduct,
  getSingleProductService,
  getProduct,
} = require('../services/product.services');

const { addProductValidation,getSinlgeProductValidation,eidtProductValidation } = require('../utils/validation');

const validation = {
  addproduct: addProductValidation,
  signleproduct: getSinlgeProductValidation,
  editproduct: eidtProductValidation
 

};
const handleValidation = (body, res, type) => {
  const { error } = validation[type](body);
  if (error) {
    throw Error(error.details[0].message);
  }
};

const getAllProduct= async (req, res) => {
  try {
    const totalUsers = await getProduct({});
   
    return res.status(200).json({ data: totalUsers });
  } catch (err) {
    return res.status(400).json({ error_msg: err.message });
  }
};

const addProduct = async (req, res) => {

  try {
    await handleValidation(req.body, res, 'addproduct');
    //   Checking if the user is already in the db
    // const emailExist = await Category.findOne({ name: req.body.name });

    // if (emailExist) {
    //   return res.status(400).json({ error_msg: 'Category already exists' });
    // }

    // Create a new user
    const user = new Product(req.body);

    const savedUser = await user.save();
    // Generate and send token

    // Send email using sendgrid here
    return res.status(201).json({ data: savedUser });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};

const getEditProduct= async (req, res) => {

  try {
    await handleValidation(req.body, res, 'editproduct');
    //   Checking if the user is already in the db
    

    // Create a new user
    const { _id } = req.body;
    
   const user = await getAndEditProduct({ _id }, req.body);
   // const user = await Category.findOneAndUpdate({ _id }, req.body);


    // Generate and send token

    // Send email using sendgrid here
    return res.status(201).json({ data: user });
  } catch (err) {
    console.log({ err });
    return res.status(400).json({ error_msg: err.message });
  }
};
const getSingleProduct = async (req, res) => {
  try {
    await handleValidation(req.body, res, 'signleproduct');

    const user = await getSingleProductService({ _id: req.body.id });
    return res.status(200).json({ data: user });
  } catch (err) {
    return res.status(400).json({ error_msg: err.message });
  }
};

module.exports = {
  getAllProduct,
  addProduct,
  getSingleProduct,
  getEditProduct,
  
 
};
