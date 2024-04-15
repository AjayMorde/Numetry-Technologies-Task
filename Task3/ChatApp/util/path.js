/*

 * Exports the directory name of the main modules filename(app.js)
 */
const path = require("path");
module.exports = path.dirname(require.main.filename);
