const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Create a review
router.post('/', async (req, res) => {
  try{
    const { productId, name, email, rating, comment } = req.body;
    if(!name || !comment) return res.status(400).json({error: 'name and comment are required'});
    const review = new Review({ productId, name, email, rating, comment });
    await review.save();
    res.status(201).json(review);
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'internal server error'});
  }
});

// Get reviews (optionally filter by productId)
router.get('/', async (req, res) => {
  try{
    const { productId, limit = 50, page = 1 } = req.query;
    const filter = {};
    if(productId) filter.productId = productId;
    const skip = (Math.max(1, page) - 1) * limit;
    const reviews = await Review.find(filter).sort({createdAt: -1}).skip(skip).limit(Number(limit));
    res.json(reviews);
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'internal server error'});
  }
});

// Get single review
router.get('/:id', async (req, res) => {
  try{
    const review = await Review.findById(req.params.id);
    if(!review) return res.status(404).json({error: 'not found'});
    res.json(review);
  }catch(err){
    console.error(err);
    res.status(500).json({error: 'internal server error'});
  }
});

module.exports = router;
