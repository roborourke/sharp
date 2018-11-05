'use strict';

const sharp = require('../../');
const fixtures = require('../fixtures');

describe('ICC Profile tranformation', function () {
  it('To custom ICC', function (done) {
    sharp(fixtures.inputJpg)
      .withIcc(fixtures.path('hilutite.icm'))
      .toBuffer(function (err, data, info) {
        if (err) throw err;
        fixtures.assertSimilar(fixtures.expected('hilutite.jpg'), data, { threshold: 1 }, done);
      });
  });
});
