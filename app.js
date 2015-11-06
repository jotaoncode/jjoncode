/*global require*/
/**
 * Module dependencies
 */

var express = require('express'),
  requireDir = require('require-dir'),
  http = require('http'),
  routes = requireDir('./routes'),
  path = require('path'),
  app = module.exports = express(),
  resources = path.join(__dirname, 'pages');

/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.static(resources));

/**
 * Routes
 */

app.get('/', routes.home);
app.get('/home', routes.home);
app.get('/news/optimizations/pagespeed', routes.pagespeed);
app.get('/trends', routes.trends);

/**
 * Start Server
 */
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
