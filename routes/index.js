var express = require('express');
var router = express.Router();
var dbop = require('../dao/dbConnect');
var session = require('express-session');
var user = require('../dao/user');
/* GET home page. */
router.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}));
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express',name:"6" });
});

router.get('/test', function (req, res, next) {
 
  res.render('test', {value: "value"})

});
router.post('/test', function (req, res, next) {
  var name = req.body.name;
  var password = req.body.password;
  req.session.name = name;
  console.log(req.session.name);
  console.log(password);
  dbop.insert(name,password,function (msg) {
    console.log(msg == true);
    if(msg == true){
      // console.log("xx"+name);
      // res.json({"msg":true,"name":req.session.name});
      res.send({msg:msg})
    }
  });
});
router.get('/register', function(req, res, next) {
  // user.getvalue(function(msg){
  //
  //   if(msg){
  //     res.send("success");
  //   }else{
  //     res.send('fail')
  //   }
  // })
  res.render('register',{})
});
router.post('/register',function (req, res) {
  console.log("return"+req.body.Sa);
  console.log("return"+req.body.Sb);
  var abc = "wert"
  res.send(abc)
})
module.exports = router;
