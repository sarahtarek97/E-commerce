const router = require('express').Router();
const validateRequest = require('../../../common/validateRequest');
const {addSchema} = require('../joi/wishlist.joi');
const isAuthrized = require('../../../common/isAuthrized');
const {allWishlist,addToWishlist} = require('../controller/wishlist.controller');
const {ADD_TO_WISHLIST,ALL_WISHLIST} = require('../endpoints');


//APIs
router.get('/allWishlist',isAuthrized(ALL_WISHLIST),allWishlist);
router.post('/addToWishlist',isAuthrized(ADD_TO_WISHLIST),validateRequest(addSchema),addToWishlist);

module.exports = router;