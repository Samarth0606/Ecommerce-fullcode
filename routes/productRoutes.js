const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); //mini server

// all the products
router.get('/products' , async(req,res)=>{
    let allProducts =  await Product.find({});
    res.render('product/index' , {allProducts})
})

// form for adding new product
router.get('/product/new', (req,res)=>{
    res.render('product/new')
})
// actually adding the product
router.post('/products' , async(req,res)=>{
    let {name,img,price,desc} = req.body;
    await Product.create({name,img,price,desc});
    res.redirect('/products')
})

module.exports = router;
