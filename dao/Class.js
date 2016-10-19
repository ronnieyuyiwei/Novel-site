/**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js')
var ClazzSchema = require('./classSchema.js')
var Clazz = mongoose.model('Clazz',ClazzSchema)


module.exports  = Clazz