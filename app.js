const express = require('express');
const path = require('path');
const app =  express(); //instance
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/productRoutes')
const methodOverride = require('method-override')

mongoose.connect('mongodb://127.0.0.1:27017/titans')
.then(function(){
    console.log('DB CONNECTED SUCCESSFULLY');
})
.catch(function(err){
    console.log(err , "ERROR");
})

app.set('view engine'  , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
// static files
app.use(express.static(path.join(__dirname , 'public')));
app.use(express.urlencoded({extended:true}))//undefined na de body
app.use(methodOverride('_method'))

// seedDB()
app.use(productRoutes)

const PORT = 8080;
app.listen(PORT , function(){
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})