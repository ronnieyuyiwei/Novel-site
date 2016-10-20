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
var address = require('./dao/addressModel');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
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
//
// school(13,449,"进修附中","MR.w");
// school(15,454,"上海中学");
// school(16,467,"致远中学","MS.l");
// school(17,489,"釜山中学","Ronnieyuyiwei");
// school(18,498,"进才中学");
// school.saveobj(14,501,"冰山中学");
// school.removeobj();
address("78902国","江南区1333334号","13");
// address.addaddress("杨浦区","黄山路1230号","14");
// address("杨浦区",function(err,result){
//     if(err) console.log(err)
//     else console.log(result)
// })
// var val = 1;

// 我们假设step1, step2, step3都是ajax调用后端或者是
// 在Node.js上查询数据库的异步操作
// 每个步骤都有对应的失败和成功处理回调
// 需求是这样，step1、step2、step3必须按顺序执行
// function step1(resolve, reject) {
//     console.log('步骤一：执行');
//     if (val >= 1) {
//
//         resolve('Hello I am No.1');
//         console.log("qwert1")
//     } else if (val === 0) {
//         reject(val);
//     }
// }
//
// function step2(resolve, reject) {
//     console.log('步骤二：执行');
//     if (val === 1) {
//         val=5;
//          resolve();
//         console.log("qwert2")
//     } else if (val === 0) {
//         reject(val);
//     }
// }
//
// function step3(resolve, reject) {
//     console.log('步骤三：执行');
//     if (val >= 1) {
//         console.log(val)
//         // resolve('Hello I am No.3');
//     } else if (val === 0) {
//         reject(val);
//     }
// }
//
// new Promise(step1).then(function(val){
//     console.info(val);
//     return new Promise(step2);
// }).then(function(val){
//     console.info(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.info(val);
//     return val;
// }).then(function(val){
//     console.info(val);
//     return val;
// });
// address.addaddress("静安区","宝山路1230号","15");
// address.addaddress("青浦区","朱家角镇6088号","15");
// address.addaddress("徐汇区","天钥桥路567号","15");
// address.addaddress("浦东新区","林凤路1230号","16");
// address.addaddress("杨浦区","军工路516号","16");
// address.addaddress("青浦区","飞天路1230号","17");
// school.findobj(function (err,result) {
//     if(err) console.log(err);
//     else{
//         console.log("查询成功"+" "+result.address[0].name);
//     }
// })

// var Clazz = require('./dao/class')
// var Student = require('./dao/student')
// var clazz = new Clazz(
//  {
//  clazzName:'软件2班'
//  }
//  );
//
//  clazz.save(function  (argument){
//  console.log('true');
//  });
//
// var student = new Student({
//  name : 'hacke2',
//  clazzID : '58072c162e69164024bb0ed2'
//  })
//  student.save(function (err){
//  console.log('true');
//  })

// Student.findClazzNameByStudentName('hacke2', function (err, student){
//     if(err) console.log(err);
//
//     console.log(student.clazzID.clazzName);
// })

// school();



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