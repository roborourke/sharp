'use strict';

const assert = require('assert');

const sharp = require('../../');
const fixtures = require('../fixtures');

describe('MapLut', function () {
  it('maps image with a look up table', function (done) {
    const output = fixtures.path('output.mapped-lut.jpg');
    sharp(fixtures.inputJpg)
      .resize(320, 240, { fastShrinkOnLoad: false })
      .maplut(fixtures.path('filter-lut.png'))
      .toFile(output, function (err, info) {
        if (err) throw err;
        assert.strictEqual(true, info.size > 0);
        fixtures.assertMaxColourDistance(output, fixtures.expected('mapped-lut.jpg'), 18);
        done();
      });
  });
});
