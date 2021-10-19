const { StatusCodes } = require("http-status-codes");
const Product = require("../model/product.model"); 

  
const getAllProducts = async(req,res)=>{
    let {page,size} = req.query;
    if(!page){
        page = 1;
    }
    if(!size){
        size = 10;
    }
    const limit = parseInt(size);
    const skip = (page-1)*size;
    const products = await Product.find({}).limit(limit).skip(skip);
    const all = await Product.count();
    const totalPages = Math.ceil(all/limit);
    res.json({page:page,size:size,totalPages:totalPages,message:'users',products:products});
}

const addProduct = async (req,res)=>{
    let {name,description,productImg} = req.body;
    try{
        console.log(req.file);
        let newProduct = new Product({name,description,productImg:`http://localhost:3000/${req.file.path}`});
        const product = await newProduct.save();
        res.json({message:'product added success',product});
    
    } catch (error) {
        res.json({message:'error while adding', error})
        }
}

module.exports = {
   getAllProducts,
   addProduct,
}