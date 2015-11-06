var routing = require('../utils/routing'),
    createPath = require('../utils/createPath');

function PageSpeed (req, res) {
  var pathPage = createPath("/pages/optimizations/pagespeed.html");
  routing(req, res, pathPage);
}
module.exports = PageSpeed;
