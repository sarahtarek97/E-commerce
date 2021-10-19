const { UPDATE_PROFILE } = require("../../../modules/users/endpoints");
const {GET_ALL_PRODUCTS} = require('../../../modules/products/endpoints');
const {ADD_TO_CART,ALL_CART} = require('../../../modules/cart/endpoints');
const {ALL_WISHLIST,ADD_TO_WISHLIST} = require('../../../modules/wishlist/endpoints');

module.exports = [UPDATE_PROFILE,GET_ALL_PRODUCTS,ADD_TO_CART,ALL_CART,ALL_WISHLIST,ADD_TO_WISHLIST];