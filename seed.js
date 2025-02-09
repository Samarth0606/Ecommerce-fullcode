const Product = require("./models/Product");

const products = [
    {
        name:"Iphone 16" ,
        img: "https://images.unsplash.com/photo-1737190715958-32f94695a6c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTZ8ZW58MHx8MHx8fDA%3D" ,
        price: 70000,
        desc:"Naya iphone hai ye latest"
    },
    {
        name:"Vision Pro" ,
        img: "https://images.unsplash.com/photo-1713869782573-3a6eee95c834?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlzaW9uJTIwcHJvfGVufDB8fDB8fHww",
        price: 370000,
        desc:"Naya nazariya duniya ka"
    },
    {
        name:"Macbook Pro" ,
        img: "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price: 175000,
        desc:"Badi baat cheet industry ke logo se"
    },
    {
        name:"S25 ultra" ,
        img: "https://images.unsplash.com/photo-1615265744588-6710f263447b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8czI1JTIwdWx0cmF8ZW58MHx8MHx8fDA%3D",
        price: 155000,
        desc:"Door se dekho zamana"
    }
]

// seed
async function seedDB(){
    await Product.insertMany(products);
    console.log("DB SEEDED");
}

module.exports = seedDB;
