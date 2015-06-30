var config = require('../config._js');
var status = require('../status._js');

module.exports ={
    '/api/case/demo': {
        methods: ['POST'],
        fn: function (req, res, _) {
            //TODO
            return res.json(status.success({data:{demo:"demo"}}));
        }
    }
}