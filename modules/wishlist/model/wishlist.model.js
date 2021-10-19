const mongoose = require('mongoose');
const wishlistSchema = require('../schema/wishlist.schema');


const Wishlist = mongoose.model('wishlist',wishlistSchema);

module.exports = Wishlist;