/**
 * Created by septsaber on 2016/7/21.
 */

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/tianhe';


function Insert(name, password, kallback) {

    var insertDocument = function (db, callback) {
        db.collection('users').insertOne({
            "name": name,
            "password": password
        }, function (err, result) {
            assert.equal(err, null);
            console.log("Inserted a document into the users collection.");
            console.log("This is the result" + result);
            callback();
        });
    };
    MongoClient.connect(url, function (err, db) {
        assert.equal(null, err);
        insertDocument(db, function (err) {
            if (err) {
                console.log(err)
            }
            db.close();
            var flag = true;
            kallback(flag)
        });
    });
}
function Lookfor(kallback) {
    MongoClient.connect(url, function (err, db) {
        assert.equal(err, null);
        searchDocument(db, function (name,password) {

            console.log("name" + name);
            console.log("password" + password);
            kallback(name,password);

        })

    });

    var searchDocument = function (db, callback) {
        var cursor = db.collection('users').find();
       cursor.each(function(err,doc){
         assert.equal(err,null);
           if (doc !=null){
               console.dir(doc.name)
               console.dir(doc.password)
               callback(doc.name,doc.password);
           }
       })
    }
}
exports.insert = Insert;
exports.lookfor = Lookfor;




































