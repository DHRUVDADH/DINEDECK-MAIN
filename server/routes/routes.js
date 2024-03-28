const express = require("express")
const router = express.Router()


const { login, signUp,changePassword,} = require("../controller/Auth")
// const { resetPasswordToken,  resetPassword,} = require("../controllers/ResetPassword")
const { isLoggedin,isCustomer,isChef,isManager } = require("../middlewers/AuthMiddlewers");
const {resetPasswordToken,resetPassword} = require("../controller/ResetPassword");




router.post("/login",login)                      
router.post("/signup", signUp)                       
// router.post("/changepassword", auth, changePassword)     


router.get("/Manager",isLoggedin,isManager,(req,res)=>{
    console.log('Manager yeah');
    res.json({
        success:true,
        message:"welcome you login as Manager",
        user:req.user
    })
})

router.post("/ResetPassword",resetPasswordToken);



// router.post("/reset-password-token", resetPasswordToken)                 
// router.post("/reset-password", resetPassword)                         


module.exports = router;

 