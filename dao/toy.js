/**
 * Created by YYW on 2016/10/24.
 */
// var assert = require('assert');
var mongoose = require('./mongoose.js');
var assert = require('assert')
var Schema = mongoose.Schema;
var toySchema = new Schema({
    color: String,
    name: String
});

var Toy = mongoose.model('Toy', toySchema);

var validator = function (value) {
    return /blue|green|white|red|orange|periwinkle/i.test(value);
};
Toy.schema.path('color').validate(validator,
    'Color `{VALUE}` not valid', 'Invalid color');

var toy = new Toy({ color: 'green'});
var ftoy = function () {
    toy.save(function (err) {
        // err is our ValidationError object
        // err.errors.color is a ValidatorError object
        // console.log(err.errors.color.message)
        // console.log(err.errors.color.kind)
        // console.log(err.errors.color.path)
        // console.log(err.errors.color.value)
        // console.log(err.errors.color.name)

    });
}

exports.ftoy = ftoy;