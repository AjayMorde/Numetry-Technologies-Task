const path = require("path");
//provides a set of standard operators that can be used in queries to perform complex conditions.
// imports the Op (Operator) object from the Sequelize library
const { Op } = require("sequelize");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sequelize = require("../util/database");

const rootDir = require("../util/path");


function generateAccessToken(id, email) {
  //first paramater payload(as an object), second paramater secret key
  return jwt.sign({ userId: id, email: email }, 'a46142352jay2352morde5674b784hjfiuye68940sjhhreurh34934i');
}

/*
Express route handler : Serves the sign-up page
*/
exports.getSignUpPage = (req, res, next) => {
  //construct the filePath for the sign-up page
  const filePath = path.join(rootDir, "views", "home.html");

  //Sending the sign-up page as the response
  res.sendFile(filePath);
};


exports.postUserSignUp = async (req, res, next) => {
  // Start a Sequelize transaction to ensure database consistency
  const t = await sequelize.transaction();
  try {
    //extract data from the request body
    const name = req.body.nameValue;
    const email = req.body.emailValue;
    const number = req.body.phoneValue;
    const password = req.body.passwordValue;

    //Find a user in the database where either the email or number matches the provided values
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [{ email }, { number }],
      },
    });
    //if user exists in db return the fumction with 409 status
    if (existingUser) {
      return res
        .status(409)
        .json({ error: "This email or phone number already exists" });
    }

    //hash the password (salt=10)
    const hash = await bcrypt.hash(password, 10);

    //create a new User
    await User.create({
      name: name,
      email: email,
      number: number,
      password: hash,
      transaction: t,
    });
    //commit the transaction if all operations were succesfull
    await t.commit();
    //send a succes response
    res.status(200).json({
      success: true,
      message: "Signup Successful!",
    });
  } catch (err) {
    console.log(err);
    //Rollback the transaction if there's an error
    await t.rollback();
    //send an error response
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};


exports.postUserLogin = async (req, res, next) => {
  try {
    //Extract user email and password
    const email = req.body.emailValue;
    const password = req.body.passwordValue;
    console.log("Email", email);
    console.log("Password", password);

    // Find the user in the database
    const user = await User.findOne({ where: { email: email } });

    if (!user) {
      // User not found
      return res.status(404).json({
        success: false,
        message: "User doesn't exist!",
      });
    }

    //Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      //generate access token and login
      return res.status(200).json({
        success: true,
        message: "Login Succesfull",
        token: generateAccessToken(user.id, user.email),
      });
    } else {
      //response for incorrect password
      return res.status(401).json({
        success: false,
        message: "Password Incorrect",
      });
    }
  } catch (error) {
    console.error(error);

    //error response
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
