/**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js')
var SchoolSchema = require('./SchoolSchema')
var School = mongoose.model('School',SchoolSchema)

module.exports  = School;