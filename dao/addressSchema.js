// /**
//  * Created by YYW on 2016/10/13.
//  */
var mongoose = require('./mongoose.js');
var Schema = mongoose.Schema;
var addressSchema = new Schema({

    name :String,
    address:String,
    num : Number

},{collection:"address"});


module.exports = addressSchema;