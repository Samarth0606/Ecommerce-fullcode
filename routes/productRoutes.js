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

// particular product
router.get('/products/:idd' , async(req,res)=>{
    let {idd} = req.params;
    let foundProduct = await Product.findById(idd);
    res.render('product/show' , {foundProduct})
})

// form for editing the products
router.get('/products/:idd/edit', async(req,res)=>{
    let {idd} = req.params;
    let foundProduct = await Product.findById(idd);
    res.render('product/edit', {foundProduct})
})

// actually editing the product
router.patch('/products/:idd', async(req,res)=>{
    let {idd} = req.params;
    let {name,img,price,desc} = req.body;
    await Product.findByIdAndUpdate(idd,{name,img,price,desc});
    res.redirect('/products')
})

// delete
router.delete('/products/:idd'  , async(req,res)=>{
    let {idd} = req.params;
    await Product.findByIdAndDelete(idd);
    res.redirect('/products')
})

module.exports = router;
