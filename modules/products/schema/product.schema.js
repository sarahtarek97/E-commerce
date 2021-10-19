const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');

const productSchema = new Schema({
    name:{type: String},
    description:{type: String},
    productImg: {type: String},
    },{
    timestamps: true,
    }
);


module.exports = productSchema;