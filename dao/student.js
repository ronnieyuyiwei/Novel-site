/**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js');
var StudentSchema = require('./studentSchema');
var Student = mongoose.model('Student',StudentSchema);
module.exports  = Student;