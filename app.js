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
mongoose.connect('mongodb://localhost/tianhe');
var db = mongoose.connection;
db.on('error',console.error.bind(console,"连接错误"))
db.once('open',function(){
    //一次打开记录
    console.log("Once opened!");
    var kittySchema = mongoose.Schema({
        name:String
    });
    kittySchema.methods.speak = function () {
        var greeting = this.name ? "Memo name is " + this.name : "Memo do not have a name";
        console.log(greeting);
    };
    var Kittenabc  = mongoose.model('Kittenabc',kittySchema);
    var silence =  new Kittenabc({name:"Silence"});
    console.log(silence.name); //Silence;
    var fluffy = new Kittenabc({name:'fluffy'});

    fluffy.save(function(){

        fluffy.speak();
        console.log(fluffy.name);
        console.log("save success")
    })


});


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