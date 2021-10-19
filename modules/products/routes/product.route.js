const router = require('express').Router();
const validateRequest = require('../../../common/validateRequest');
const {addProductSchema} = require('../joi/product.joi');
const isAuthrized = require('../../../common/isAuthrized');
const {getAllProducts,addProduct} = require('../controller/product.controller');
const {GET_ALL_PRODUCTS,ADD_PRODUCT} = require('../endpoints');

const multer = require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./upload/')
    },
    filename:(req,file,cb)=>{
        cb(null,new Date().toISOString() + file.originalname)
    }
})
const upload = multer({storage});

//APIs
router.get('/allProducts',isAuthrized(GET_ALL_PRODUCTS),getAllProducts);
router.post('/addProduct',upload.single('productImg'),isAuthrized(ADD_PRODUCT),validateRequest(addProductSchema),addProduct);

module.exports = router;