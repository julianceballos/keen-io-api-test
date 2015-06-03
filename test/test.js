var assert= require('assert'),
    request = require('supertest'),
    app = require('../app');

describe('api', function() {

    describe('GET /analytics/charges', function() {
        it('return 200', function(done) {
            this.timeout(60000);
            request(app).get('/analytics/charges').expect(200, done);
        });
        it('return total sales', function(done) {
            this.timeout(60000);
            request(app).get('/analytics/charges?ops[]={"op": "sum", "prop": "amount"}').expect(200, done);
        });
        it('return number of transactions', function(done) {
            this.timeout(60000);
            request(app).get('/analytics/charges?ops[]={"op": "count"}').expect(200, function(err, res) {
                if (err) return done(err);
                done();
            });
        });
        it('return average amount', function(done) {
            this.timeout(60000);
            request(app).get('/analytics/charges?ops[]={"op": "avg", "prop": "amount"}').expect(200, function(err, res) {
                if (err) return done(err);
                done();
            });
        });
        it('return chargebacks', function(done) {
            this.timeout(60000);
            request(app).get('/analytics/charges?ops[]={"op": "count", "filters": [{"property_name": "status", "operator": "eq", "property_value": "chargeback"}]}').expect(200, function(err, res) {
                if (err) return done(err);
                done();
            });
        });
        it('return sales grouped by status', function(done) {
            this.timeout(60000);
            request(app).get('/analytics/charges?ops[]={"op": "extraction", "groupBy": "status", "interval": "daily", "timeframe": "this_1_month"}').expect(200, function(err, res) {
                if (err) return done(err);
                done();
            });
        });
    });

});
