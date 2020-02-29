var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('uploads', () => {
  describe('POST /upload', () => {
    it('should handle file upload', function (done) {
      request(server)
        .post('/upload')
        .set('Content-Type', 'multipart/form-data')
        .attach('upfile', 'test/test-samples/image1.png')
        .expect(200)
        .end(function (err, res) {
          should.not.exist(err);
          res.body.should.eql('Handled file[image1.png]');
          done();
        });
    });
  });
});
