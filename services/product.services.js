const Product = require('../models/Product');



const getAndEditProduct = async (query, newData) => {
  try {
    const user = await Product.findOneAndUpdate(query, newData, {
      new: true,
      runValidators: true
    });

    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getSingleProductService = async (query) => {
  try {
  
    
    const user = await Product.findOne(query);
    return user;
  } catch (err) {
    throw Error(err);
  }
};

const getProduct = async (query) => {
  try {
    console.log("sdfsdf");
     const user = await Product.aggregate([

        {$lookup:{ from: 'categories', localField:'_id', 
          foreignField:'catId',as:'parentCat'}},
  ]);
    return user;
  } catch (err) {
    throw Error(err);
  }
};


module.exports = {
  getAndEditProduct,
  getSingleProductService,
  getProduct,
  
};
