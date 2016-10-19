/**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js')

var ClazzSchema = new mongoose.Schema({
    clazzName:String
})

module.exports = ClazzSchema;