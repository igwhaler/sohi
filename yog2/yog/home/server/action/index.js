var index = require('../model/index.js');
var util = require('../lib/util.js');

module.exports = function (req, res) {
    console.log(req.headers['user-agent']);

    res.render('home/page/index.tpl', index.getData());
};