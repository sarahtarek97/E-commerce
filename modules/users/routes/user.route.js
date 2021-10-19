const router = require('express').Router();
const validateRequest = require('../../../common/validateRequest');
const {signUpSchema,signInSchema} = require('../joi/user.joi');
const isAuthrized = require('../../../common/isAuthrized');
const {getAllUsers,signup,signin,updateProfilePic} = require('../controller/user.controller');
const {GET_ALL_USERS,UPDATE_PROFILE} = require('../endpoints');

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

//end points
router.get('/users',isAuthrized(GET_ALL_USERS),getAllUsers);
router.post('/add',upload.single('profileImg'),validateRequest(signUpSchema),signup);
router.post('/signIn',validateRequest(signInSchema),signin);
router.put('/updateProfilePic',upload.single('profileImg'),isAuthrized(UPDATE_PROFILE),updateProfilePic);


module.exports = router;