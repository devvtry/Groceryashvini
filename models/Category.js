const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  parentId: {
    type: mongoose.Schema.ObjectId,    

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
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Category', categorySchema);
