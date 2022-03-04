const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  parentId: {
    type: Object,
    //required: true,
    min: 6,
    max: 255,
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
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Category', categorySchema);
