/**
 * Created by YYW on 2016/10/26.
 */
var mongoose = require('./mongoose.js');
var personSchema = require('../Schema/personSchema');
var Person = mongoose.model('School',personSchema);

module.exports  = Person;