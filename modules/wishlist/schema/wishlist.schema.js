const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    product:{type: mongoose.Schema.Types.ObjectId, ref:'product'},
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    },{
    timestamps: true,
    }
);


module.exports = wishlistSchema;