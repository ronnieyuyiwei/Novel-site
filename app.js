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
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
var mongoose = require('mongoose');
var db = mongoose.createConnection("localhost","tianhe");
db.on('error',console.error.bind(console,"连接错误"))
db.once('open',function(){
    //一次打开记录
    console.log("Once opened!");
});
var PersonSchema  = new mongoose.Schema(
    {
        name:String
    }
);
var PersonModel = db.model('Person',PersonSchema);
var personEntity = new PersonModel({name:'Krouky'});
//打印这个实体的名字看看
console.log(personEntity.name); //Krouky
 



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