var routing = require('./routing');

function Trends (req, res) {
  var pathPage = __dirname + "/pages/index.html";
  routing(req, res, pathPage);
}
module.exports = Trends;
