/**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js');
var addressSchema = require('./addressSchema');
var School = require('./schoolModel');
var Address = mongoose.model("Address",addressSchema);
var tiger =function (name,address,num) {
   Address.create({name:name,address:address,num:num},function (err,doc) {
        if (err) {
            console.log(err);
        }
        else {
            School.update({num:num},{$push:{address:doc._id}},{upsert:true},function (err) {
                if(err){
                    console.log(err)
                }
                else {
                    console.log("地址插入成功");
                    console.log("关联插入成功");
                }
            })
        }
    });

};

module.exports = Address;
