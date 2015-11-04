var requireDir = require('require-dir'),
    routes = requireDir('../routes'),
    expect = require('expect.js');

describe("Home", function () {
  it(' Should be defined', function () {
    expect(routes.home).not.to.be(undefined);
  });
});

