const { response } = require("express");
const User = require("../models/user");
const mailSender = require("../utils/mailSender");
const { use } = require("../routes/routes");
const bcrypt = require("bcrypt");

const resetPasswordToken = async (req,response)=>
{
    try
    {
        const {email} = req.body;
        console.log(email);

     const user = await User.findOne({email: email});

     if(!user)
     {
        return response.json(
             {
                success:false,
                message:'your email is not registerd'
             }
        )
     }

     const token =crypto.randomUUID();

     const updatedDetails =  await User.findOneAndUpdate(
        {
            email:email
        },
        {
            token:token,
            resetPasswordExpires:Date.now()+ 5*60*1000,
        },
        {new :true}
        );

        const url =  `http://localhost:5173/Resetpassword/${token}` ;

        await mailSender(
            email,
            "password reset link",
            `password reset link url ${url}`
        );

        return response.json(
            {
                success:true,
                message:"Email send succssfully , please check and update password "
            }
        );


     }
     catch(error)
     {    
          return response.json(
            {   
                success:false,
                message:'error while reset password'
            }
          )
     }

}

const resetPassword = async(req,res)=>
{
    try {
        const {password , confirmPassword , token} =req.body ;

    if(password != confirmPassword)
    {
        return response.json({
            success:false,
            message:'password does not matching'
        })
    }

    const userDetails = User.findOne(
        {
            token:token
        }
    );

    if(!userDetails)
    {
        return response.json(
            {
                success:false,
                message:'token is invalid'
            }
        )
    }

    if(userDetails.resetPasswordExpires < Date.now())
    {
         
        return response.json(
            {
                success:false,
                message:'token is expired please regerate the token'
            }
        )
    }

    const hashedPassword = await bcrypt.hash(password,10);

    await User.findOne({
        token:token
    },
    {
        password:hashedPassword
    },
    {
        new:true
    });

    return response.json(
        {
            success:true,
            message:'reset password succfully'
        }
    )

    } catch (error) {
        
        return response.json(
            {
                success:false,
                message:"error while updeating password"
            }
        )
    }

}

module.exports = {  resetPasswordToken , resetPassword};