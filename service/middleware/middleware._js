var compression = require('compression');
var bodyParser = require('body-parser');
var config = require('../config._js');
var status = require('../status._js');
var jwt = require('jsonwebtoken');


module.exports = {
    'compression': {
        methods: ['use'],
        fn: compression()
    },

    /*
    'web': {
        methods: ['use'],
        fn: express.static(__dirname + '/../web')
    },
    */

    'body parser url encoded': {
        methods: ['use'],
        fn: bodyParser.urlencoded({limit: '10mb', extended: true})
    },

    'body parser json': {
        methods: ['use'],
        fn: bodyParser.json({limit: '10mb', extended: true,type: '*/json'})
    },

    'cors': {
        methods: ['use'],
        fn: function (req, res, _) {
            res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
            res.header("Access-Control-Expose-Headers", "Authentication-Info");

            if (req.method == 'OPTIONS') {
                res.end();
                return false;
            }
        }
    },


    'error handler': {
        methods: ['use'],
        deferred: true,
        fn: function (err, req, res, _) {
            if (err instanceof status.exception)
                res.json(err.status);
            else {
                console.log('[InternalError] ' + JSON.stringify(err));
                res.json(status.errorInternal(err));
            }
        }
    }
};
