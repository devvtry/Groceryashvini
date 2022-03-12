const Joi = require('@hapi/joi');

// add category validation
const addCategoryValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    parentId: Joi.string().allow(null),
    description: Joi.string().allow(null),
    image: Joi.string().allow(null),
    isActive: Joi.boolean()
  });

  return schema.validate(data);
};
// edit category 
const eidtCategoryValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    parentId: Joi.string().allow(null),
    description: Joi.string().allow(null),
    image: Joi.string().allow(null),
    isActive: Joi.boolean(),
    _id: Joi.string().required()

  });

  return schema.validate(data);
};

// get single category
const getSinlgeCategoryValidation = (data) => {
  const schema = Joi.object({
    
    id: Joi.string().required()

  });

  return schema.validate(data);
};

// Register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
    role: Joi.string().required(),
    isActive: Joi.boolean()
  });

  return schema.validate(data);
};

// User edit validation
const userEditValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    role: Joi.string().required(),
    isActive: Joi.boolean().required(),
    _id: Joi.string().required()
  });

  return schema.validate(data);
};

// Login validation
const loginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

// token verifit validation
const tokenValidation = (data) => {
  const schema = Joi.object({
    token: Joi.string().required(),
    email: Joi.string().min(6).required().email()
  });

  return schema.validate(data);
};

// token resend validation
const ensureEmailValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email()
  });

  return schema.validate(data);
};

// pasword reset validation
const passwordResetValidation = (data) => {
  const schema = Joi.object({
    token: Joi.string().required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  });

  return schema.validate(data);
};

// Password change validator
const passwordChangeValidation = (data) => {
  const schema = Joi.object({
    oldPassword: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required()
  });

  return schema.validate(data);
};


const addProductValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    catId: Joi.string().allow(null),
    childCatId: Joi.string().allow(null),
    description: Joi.string().allow(null),
    image: Joi.string().allow(null),
    variant: Joi.string().allow(null),
    price: Joi.string().required(),
    offerPrice: Joi.string().required(),
    quantity: Joi.string().required(),
    isActive: Joi.boolean()
  });

  return schema.validate(data);
};
const getSinlgeProductValidation = (data) => {
  const schema = Joi.object({
    
    id: Joi.string().required()

  });

  return schema.validate(data);
};

const eidtProductValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    catId: Joi.string().allow(null),
    childCatId: Joi.string().allow(null),
    description: Joi.string().allow(null),
    image: Joi.string().allow(null),
    variantData: Joi.string().allow(null),
    price: Joi.string().required(),
    offerPrice: Joi.string().required(),
    quantity: Joi.string().required(),
    isActive: Joi.boolean(),
    _id: Joi.string().required()

  });

  return schema.validate(data);
};
module.exports = {
  loginValidation,
  registerValidation,
  tokenValidation,
  ensureEmailValidation,
  passwordResetValidation,
  passwordChangeValidation,
  userEditValidation,
  addCategoryValidation,
  eidtCategoryValidation,
  getSinlgeCategoryValidation,
  addProductValidation,
  getSinlgeProductValidation,
  eidtProductValidation
};
