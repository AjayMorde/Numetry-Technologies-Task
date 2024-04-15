const path = require("path");

const rootDir = require("../util/path");

exports.getHomePage = (req, res, next) => {
  
  const filePath = path.join(rootDir, "views", "homePage.html");

  
  res.sendFile(filePath);
};
