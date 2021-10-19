const { StatusCodes } = require("http-status-codes");
const Cart = require("../model/cart.model"); 


const allCart = async(req,res)=>{
    let {page,size} = req.query;
    if(!page){
        page = 1;
    }
    if(!size){
        size = 10;
    }
    const limit = parseInt(size);
    const skip = (page-1)*size;
    const cart = await Cart.find({}).populate('addedBy','userName profileImg').populate('product','name description productImg').limit(limit).skip(skip);
    const all = await Cart.count();
    const totalPages = Math.ceil(all/limit);
    res.json({message:'all products in cart',totalPages:totalPages,cart:cart});
}


const addToCart = async (req,res)=>{
    let {addedBy,product} = req.body;
    try{
        let newCart = new Cart({addedBy,product});
        const cart = await newCart.save();
        res.json({message:'product added success to cart',cart});
    
    } catch (error) {
        res.json({message:'error while adding product', error})
        }
}

module.exports = {
   addToCart,
   allCart
}