var express = require('express'),
    router = express.Router(),
    Keen = require('keen-js');

var client = new Keen({
  projectId: "556de5df90e4bd4b830558a9",
  readKey: "a60e9daf6e9433cd0a36b9d4b86b17ae194d795b6cab01cc58d31198abddb86950c0a3ae6d0ade7af34e6e7d80d22d1233ae9bfa66ca3de7c37a8de017f6523fcc024ac006a9a2db31d707c2e8158fa27b8f83d036edf3dd466f6a4884827fc2c40728b98976df4925c8a00c343ea188"
});

var ops = {
    sum: function(opts) {
        var options = {
            eventCollection: "charge",
            maxAge: 300,
            targetProperty: opts.prop || '',
            groupBy: opts.groupBy || '',
            filters: opts.filters || []
        }
        return new Keen.Query('sum', options);
    },
    count: function(opts) {
        var options = {
            eventCollection: "charge",
            maxAge: 300,
            targetProperty: opts.prop || '',
            groupBy: opts.groupBy || '',
            filters: opts.filters || []
        }
        return new Keen.Query('count', options);
    },
    avg: function(opts) {
        var options = {
            eventCollection: "charge",
            maxAge: 300,
            targetProperty: opts.prop || '',
            groupBy: opts.groupBy || '',
            filters: opts.filters || []
        }
        return new Keen.Query('average', options);
    },
    extraction: function(opts) {
        var options = {
            eventCollection: "charge",
            maxAge: 300,
            targetProperty: opts.prop || '',
            groupBy: opts.groupBy || '',
            filters: opts.filters || []
        }
        return new Keen.Query('extraction', options);
    }
}

router.get('/', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    
    var queries = [];
    if (req.query.ops) {
        for (var i = 0; i < req.query.ops.length; i++) {
            var data = JSON.parse(req.query.ops[i]);
            queries.push(ops[data.op](data));
        }
    } else {
        queries.push(ops['extraction']({}));
    }

    console.log(queries, '<<<< query');

    client.run(queries, function(err, result) {
        if (err) {
            return res.status(400).json({ message: 'Error running query' });
        } else {
            return res.json(result);
        }
    });

});

module.exports = router;
