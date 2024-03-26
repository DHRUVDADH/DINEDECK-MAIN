const jwt = require("jsonwebtoken");
const userModel = require("../models/user");
require("dotenv").config();

exports.isLoggedin = async (req, res, next) => {
  try {
    
    const token =  req.cookies.token || req.header("Authorization").replace("Bearer ","") || req.body.token  ; 
    
    // console.log(token); 
    if (!token) {
      return res.json({
        success: false,
        msg:"Token Not Found",
      });
    }
    const user = jwt.verify(token, process.env.SECRET);

    const userAtDb = await userModel.findOne({ email: user.email });
    
    if (!userAtDb) {
      return res.json({
        success: false,
        msg: "Invalid User",
      });
    }

    userAtDb.password = undefined;
    req.user = userAtDb;
    next();
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "error while checking",
    });
  }
};

exports.isCustomer = async (req, res) => {
  try {
    if (req.user.accountType !== "Customer") {
      return res.send({
        success: false,
        msg: "You are not Customer",
      });
    }

    next();
  } catch (error) {
    return res.json({
      success: false,
      msg: "error while Verifying Customer",
    });
  }
};

exports.isManager = async (req, res, next) => {
  try {
    if (req.user.accountType !== "Manager") {
      return res.send({
        success: false,
        msg: "You are not Manager",
      });
    }
    console.log("Passed Is Manager")
    next();
  } catch (error) {
    return res.json({
      success: false,
      msg: "error while Verifying Manager",
    });
  }
};


exports.isChef = async (req, res, next) => {
    try {
      if (req.user.accountType !== "Chef") {
        return res.send({
          success: false,
          msg: "You are not Chef",
        });
      }
      console.log("Passed Is Chef ")
      next();
    } catch (error) {
      return res.json({
        success: false,
        msg: "error while Verifying Chef",
      });
    }
  };