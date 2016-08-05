/**
 * Created by septsaber on 2016/7/18.
 */
var stream = require('stream');
var util = require('util');
function Person(){
    this.name = "YYw";
    this.age = "25";
    this.showMsg = function(){
        console.log("this is the message");
    };

}
function ABCDEFG(){
        //
    // Person.call(q);
    // this.abc = q.showMsg();
    this.grade = "4";
}

var w = new Person();
var a  = new ABCDEFG();

console.log(a.abc);
console.log(a.grade)

// function Writer(opt) {
//     stream.Writable.call(this, opt);
//     this.data = new Array();
// }
// Writer.prototype._write = function(data,encoading, callback) {
//     this.data.push(data.toString('utf8'));
//     console.log("Adding" + data);
//     callback();
//
// };
// var w = new Writer();
// for (var i = 1;i<=5;i++){
//     w.write("item"+i,'utf-8',function () {
//         console.log("qq")
//     });
// }
// w.end("aab");
// console.log(w.data);