const Category = require('../models/Category');

const getCategory = async (query) => {
  try {
    //const user = await Category.findOne(query);
    const user = await Category.aggregate([

        {$lookup:{ from: 'categories', localField:'_id', 
          foreignField:'parentId',as:'parentCat'}},
  ]);
     
    

    return user;
  } catch (err) {
    throw Error(err);
  }
};
const getAllParentCategory = async (query) => {
  try {
    const user = await Category.find(query);
    
     
    

    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getAndEditCategory = async (query, newData) => {
  try {
    const user = await Category.findOneAndUpdate(query, newData);

    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getSingleCategoryService = async (query) => {
  try {
    console.log("query",query);
    const user = await Category.findOne(query);
    return user;
  } catch (err) {
    throw Error(err);
  }
};

module.exports = {
  getCategory,
  getAllParentCategory,
  getAndEditCategory,
  getSingleCategoryService
};
