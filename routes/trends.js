var routing = require('../utils/routing'),
    createPath = require('../utils/createPath');

function Trends (req, res) {
  var pathPage = createPath("/pages/trends/index.html");
  routing(req, res, pathPage);
}
module.exports = Trends;
