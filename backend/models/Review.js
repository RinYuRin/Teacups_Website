const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
  productId: {type: String, required: false, index: true},
  name: {type: String, required: true},
  email: {type: String, required: false},
  rating: {type: Number, required: false, min: 1, max: 5},
  comment: {type: String, required: true},
  createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Review', ReviewSchema);
