const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    userName:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    role:{type:String, default:'user'},
    profileImg: {type: String},
    },{
    timestamps: true,
    }
);


//hook
userSchema.pre('save',async function (next) {
    this.password = await bcrypt.hash(this.password,7)
    next();
})

module.exports = userSchema;