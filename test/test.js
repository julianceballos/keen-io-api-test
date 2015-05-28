var request = require('supertest'),
    app = require('../app').app;

describe('api', function() {
    describe('GET /', function() {
        it('return 200', function(done) {
            request(app).get('/').expect(200, done);
        });
    });
});
