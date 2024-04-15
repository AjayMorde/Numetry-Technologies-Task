const jwt = require("jsonwebtoken");
const User = require("../models/userModel");


const authenticate = async (req, res, next) => {
  try {
    //Extract token from the "Authorization Header"
    console.log("inside auth middleware");
    const token = req.header("Authorization");

    //Verify and decode the JWT
    const decodedUser = jwt.verify(token, 'a46142352jay2352morde5674b784hjfiuye68940sjhhreurh34934i');

    // Retrieve user from the database based on the decoded userID(token has a property of userId)
    const userFromDB = await User.findByPk(decodedUser.userId);
    // console.log('============================================>',userFromDB)

    // Attach the user to the request
    req.user = userFromDB;
    console.log("passing through auth middleware");
    // console.log('=====================>,',req.user)

    // Move to the next middleware
    next();
  } catch (err) {
    console.log("Error in authentication middleware:", err);
    return res.status(401).json({ success: false });
  }
};

module.exports ={ authenticate};
