const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); //mini server

//adding a review
router.post('/products/:idd/review' , async(req,res)=>{
    let {idd} = req.params;
    let {rating , comment} = req.body;
    let review = await Review.create({rating , comment})
    let product = await Product.findById(idd);
    product.reviews.push(review) //object id
    await product.save();
    res.redirect(`/products/${product._id}`)
})

module.exports = router;
