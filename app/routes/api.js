
// Dependencies
var express = require('express');
var router = express.Router();
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Models
var Audit = require('../models/audit');

// Routes
Audit.methods(['get', 'put', 'post', 'delete']);

Audit.route('get', function (req, res, next) {
    var a = Audit.find({
        "User_ID": req.query.uid,
        "organization_id": req.query.oid
    }).exec(function (err, result) {
        if (err) {
            res.send("Cannot find record the record");
        }
        else {
            res.send(result);
        }
    });

});

Audit.register(router, '/audit');

// Return router
module.exports = router;
