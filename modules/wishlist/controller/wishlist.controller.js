const { StatusCodes } = require("http-status-codes");
const Wishlist = require("../model/wishlist.model"); 


const allWishlist = async(req,res)=>{
    let {page,size} = req.query;
    if(!page){
        page = 1;
    }
    if(!size){
        size = 10;
    }
    const limit = parseInt(size);
    const skip = (page-1)*size;
    const wishlist = await Wishlist.find({}).populate('addedBy','userName profileImg').populate('product','name description productImg').limit(limit).skip(skip);
    const all = await Wishlist.count();
    const totalPages = Math.ceil(all/limit);
    res.json({message:'all products in wishlist',totalPages:totalPages,wishlist:wishlist});
}


const addToWishlist = async (req,res)=>{
    let {addedBy,product} = req.body;
    try{
        let newWishlist = new Wishlist({addedBy,product});
        const wishlist = await newWishlist.save();
        res.json({message:'product added success to wishlist',wishlist});
    
    } catch (error) {
        res.json({message:'error while adding product', error})
        }
}

module.exports = {
    allWishlist,
    addToWishlist
}