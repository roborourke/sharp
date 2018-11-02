'use strict';

// const assert = require('assert');

const sharp = require('../../');
const fixtures = require('../fixtures');

describe('ICC Profile tranformation', function () {
  it('To custom ICC', function (done) {
    sharp(fixtures.inputJpg)
      .withIcc(fixtures.path('hilutite.icm'))
      .toFile(fixtures.path('output.hilutite.jpg'), done);
  });
});
