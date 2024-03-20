const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const signUp = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      confirmpassword,
      accountType,
    } = req.body;
    // console.log(accountType)

    if (!firstname || !lastname || !email || !password || !confirmpassword) {
      //validate krlo means all inbox are filled or not;

      return res.json({
        success: false,
        message: "All fields are required",
      });
    }
    const existingUser = await User.findOne({ email }); //check user already exist or not
    if (existingUser) {
      return res.json({
        success: false,
        message: "User is already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10); //Hashed the password

    // // Create the user
    // let approved = "";
    // approved === "Instructor" ? (approved = false) : (approved = true);

    const user = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      // active,
      accountType: accountType,
      // approved: approved,
      // additionalDetails:profileDetails._id,
    });
    // console.log('submiteed');
    return res.json({
      //return res
      success: true,
      user,
      message: "User is registered Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "User cannot be registrered. Please try again",
    });
  }
};

//Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body; //get data from req body

    if (!email || !password) {

      return res.json({
        success: false,
        message: "Please Fill up All the Required Fields",
      });
    }

    const user = await User.findOne({ email }); //user check exist or not
    if (!user) {
      return res.json({
        success: false,
        message: "User is not registrered, please signup first",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      //generate JWT, after password matching/comparing
      const payload = {
        // generate payload;
        email: user.email,
        id: user._id,
        accountType: user.accountType,
      };
      const token = jwt.sign(payload, process.env.SECRET, {
        // generate token (combination of header , payload , signature)
        expiresIn: "20h", // set expiry time;
      });
      user.token = token;
      user.password = undefined;

      const options = {
        //create cookie and send response
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("token", token, options).json({
        success: true,
        token,
        user,
        message: "Logged in successfully",
      });
      // console.log('loging ok');
    } else {
      // console.log('wrong password');
      return res.json({
        success: false,
        message: "Password is incorrect",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "Login Failure, please try again",
    });
  }
};

// Controller for Changing Password
const changePassword = async (req, res) => {
  try {
    const userDetails = await User.findById(req.user.id); // Get user data from req.user
    const { oldPassword, newPassword, confirmNewPassword } = req.body; // Get old password, new password, and confirm new password from req.body

    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    ); // Validate old password

    if (!isPasswordMatch) {
      // If old password does not match, return a 401 (Unauthorized) error
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" });
    }

    if (newPassword !== confirmNewPassword) {
      // Match new password and confirm new password
      return res
        .status(401)
        .json({
          success: false,
          message: "The password and confirm password does not match",
        });
    }

    const encryptedPassword = await bcrypt.hash(newPassword, 10); // Update password
    const updatedUserDetails = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    );
    // find user by id and then update password = encryptedPassword , here if you "const updatedUserDetails =" does not wirte this then also it not affect;

    try {
      // Send notification email , here passwordUpdated is template of email which is send to user;
      const emailResponse = await mailSender(
        updatedUserDetails.email,
        passwordUpdated(
          updatedUserDetails.email,
          `Password updated successfully for ${updatedUserDetails.firstName} ${updatedUserDetails.lastName}`
        )
      );
      console.log("Email sent successfully:", emailResponse.response);
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: error.message,
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" }); // Return success response
  } catch (error) {
    console.error("Error occurred while updating password:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
  }
};

module.exports = { signUp, login, changePassword };
