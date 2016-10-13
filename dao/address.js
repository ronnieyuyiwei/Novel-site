/**
 * Created by YYW on 2016/10/13.
 */
var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;
var addressSchema = new Schema({
    
    name :String,
    address:String,
    num : Number

},{collection:"address"});
var Address = mongoose.model("Address",addressSchema);
var addaddress = function(name,address,num){
    Address.create({name:name,address:address,num:num},function (err) {
        if(err) console.log(err);
        else{
            console.log("地址插入成功")
        }
    })
};
exports.addaddress = addaddress;
