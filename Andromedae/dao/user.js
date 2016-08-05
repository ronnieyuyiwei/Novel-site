/**
 * Created by septsaber on 2016/7/25.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/tianhe';

function Getvalue(kallback) {
    var getinfo = function (db, callback) {
        var cursor = db.collection('stu').find({index:{$in:["2","4"]}});
        cursor.toArray(function (err, doc) {
            for (var index in doc) {
                console.log(doc[index].sname);
            }
            callback()
        })
    };
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        getinfo(db, function () {
            db.close();
            kallback(true)
        })
    })
}

exports.getvalue = Getvalue;