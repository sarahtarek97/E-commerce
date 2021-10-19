const express = require('express');
const app = express();
const connection = require('./configration/config');
require('dotenv').config()
const port = process.env.PORT;
console.log(`process:`,process.env.PORT);
const userRouter = require('./modules/users/routes/user.route');
const productRouter = require('./modules/products/routes/product.route');
const cartRouter = require('./modules/cart/routes/cart.route');
const wishlistRouter = require('./modules/wishlist/routes/wishlist.route');

//mongodb connection
connection();

//middleware
app.use(express.json());
app.use('/upload',express.static('upload'));

app.get('/',(req,res)=>{
    res.send('express');
})

//import the modules
app.use(userRouter);
app.use(productRouter);
app.use(cartRouter);
app.use(wishlistRouter);


//run the server
app.listen(port,()=>{
    console.log(`the server is fine${port}`)
})