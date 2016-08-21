/**
 *
 * Created by YYW on 2016/8/20.
 */
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/tianhe');
mongoose.connection.on('open',function () {
    console.log("Start mongoose connection");
    mongoose.connection.db.collectionNames(function (err,name) {
        console.log(names)
        mongoose.disconnect();
    })


})