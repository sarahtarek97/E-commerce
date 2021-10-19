const { StatusCodes } = require("http-status-codes");
const User = require("../model/user.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 


const getAllUsers = async (req,res)=>{
    const user = await User.find({});
    res.json({message:'users',user:user});
}

const signup = async (req,res)=>{
    let {userName,email,password,role,profileImg} = req.body;
    try{
    console.log(req.file);
    const user = await User.findOne({email});
        if(user){
            res.status(StatusCodes.BAD_REQUEST).json({
                message:'email already exsist'
            })
        }else{
            let newUser = new User({userName,email,password,role,profileImg:`http://localhost:3000/${req.file.path}`});
            const user = await newUser.save();
            res.json({message:'sign up success',user});
        }
    } catch (error) {
        res.json({message:'sign up error', error})
        }
}

const signin = async(req,res)=>{
        let {email,password} = req.body;
      
          const user = await User.findOne({email});
          if(!user){
              res.status(StatusCodes.BAD_REQUEST).json({message:'email not found signUp at first'})
          }else{
              const match = await bcrypt.compare(password,user.password);
            if(match){
                let token = jwt.sign({_id:user._id,role:user.role},'shhh');
                res.status(StatusCodes.OK).json({
                    token,
                    user
                });
            }else{
              res.status(StatusCodes.BAD_REQUEST).json({message:'wrong password'})
            }
          }   
}

const updateProfilePic = async(req,res)=>{
    let {profileImg,path} = req.body;
    try {
        const user = await User.updateOne({profileImg:path},{profileImg:`http://localhost:3000/${req.file.path}`});
        res.json({message:"profile picture updated success",user});
    } catch (error) {
        res.json({message:"profile update erorr",error});
    }
}


module.exports = {
    getAllUsers,
    signup,
    signin,
    updateProfilePic,
}