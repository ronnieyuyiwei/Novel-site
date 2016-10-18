var express = require('express');
var events = require('events');
var emitter = new events.EventEmitter();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
var routes = require('./routes/index');
var users = require('./routes/users');
var user = require('./dao/user');
var school = require('./dao/mongo');
var address = require('./dao/address');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/tianhe')
// var db = mongoose.connection;
// var Schema = mongoose.Schema;
// db.on('error',console.error.bind(console,"连接错误"))
// db.once('open',function () {
//     console.log("一次成功的打开")
//     var Schema = mongoose.Schema;
//     var personschema = new Schema({
//         name:String,
//         num:Number,
//         sex:String
//     },{collection:"newname"})
//     var PersonModel = mongoose.model('qwert',personschema)
//     var personenity = new PersonModel({name:"YYW",num:234,sex:"male"});
//
//     personenity.save();
//
// })

//
// school(13,449,"进修附中","MR.w");
// school(15,454,"上海中学");
// school(16,467,"致远中学","MS.l");
// school(17,489,"釜山中学","Ronnieyuyiwei");
// school(18,498,"进才中学");
// school.saveobj(14,501,"冰山中学");
// school.removeobj();
// address.addaddress("黄浦区","南京东路1230号","13");
// address.addaddress("杨浦区","黄山路1230号","14");
// address.addaddress("静安区","宝山路1230号","15");
// address.addaddress("青浦区","朱家角镇6088号","15");
// address.addaddress("徐汇区","天钥桥路567号","15");
// address.addaddress("浦东新区","林凤路1230号","16");
// address.addaddress("杨浦区","军工路516号","16");
// address.addaddress("青浦区","飞天路1230号","17");
school.findobj(function (err,result) {
    if(err) console.log(err);
    else{
        console.log("查询成功"+" "+result.address);
    }
})

// school();




// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'files')))
app.use('/', routes);
app.use('/users', users);
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
// catch 404 and forward to error handler



app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;