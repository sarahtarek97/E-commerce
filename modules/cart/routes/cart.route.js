const router = require('express').Router();
const validateRequest = require('../../../common/validateRequest');
const {addSchema} = require('../joi/cart.joi');
const isAuthrized = require('../../../common/isAuthrized');
const {addToCart,allCart} = require('../controller/cart.controller');
const {ADD_TO_CART,ALL_CART} = require('../endpoints');



//APIs
router.get('/allCart',isAuthrized(ALL_CART),allCart);
router.post('/addToCart',isAuthrized(ADD_TO_CART),validateRequest(addSchema),addToCart);

module.exports = router;