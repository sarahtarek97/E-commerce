const mongoose = require('mongoose');
const productSchema = require('../schema/product.schema');


const Product = mongoose.model('product',productSchema);

module.exports = Product;