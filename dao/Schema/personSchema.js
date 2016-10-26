/**
 * Created by YYW on 2016/10/26.
 */
var mongoose = require('../mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    _id:Number,
    name: String,
    age: Number,
    stories:[{type:Schema.Types.ObjectId, ref:'Story'}]
});

module.exports = personSchema;