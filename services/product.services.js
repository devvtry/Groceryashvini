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
    console.log(query);
  //   const user = await Product.aggregate([
  //      { 
  //       $match: { 
  //           _id : query,
           
  //       }
  //   },
  //     { $lookup:
  //      {
  //        from: 'categories',
  //        localField: 'catId',
  //        foreignField: '_id',
  //        as: 'catData'
  //      }
  //    },
  //    { $lookup:
  //      {
  //        from: 'categories',
  //        localField: 'childCatId',
  //        foreignField: '_id',
  //        as: 'childCatData'
  //      }
  //    }
        
  // ]);
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
       {$match: {/* In real I will have here some query involving fields from user */}},
      { $lookup:
       {
         from: 'categories',
         localField: 'catId',
         foreignField: '_id',
         as: 'catData'
       }
     },
     { $lookup:
       {
         from: 'categories',
         localField: 'childCatId',
         foreignField: '_id',
         as: 'childCatData'
       }
     }
        
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
