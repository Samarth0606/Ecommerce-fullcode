const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); //mini server

// all the products
router.get('/products' , async(req,res)=>{
    let allProducts =  await Product.find({});
    res.render('product/index')
})

// router.post()

module.exports = router;
