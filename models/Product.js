const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  
  title: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  catId: {
    type: mongoose.Schema.ObjectId,    
    default: null
  },
  childCatId: {
    type: Object,    
    default: null
  },
  isActive: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
    default: null
  },
  image: {
    type: String,
    default: null
  },
  price: {
    type:String,
    default: null
  },
  offerPrice: {
    type:String,
    default: null
  },
  quantity: {
    type:String,
    default: null
  },
  variant: [{
            _id: {type: mongoose.Schema.ObjectId,}, 
            price: {type: String}, 
            weight: {type: String},
        }],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);
