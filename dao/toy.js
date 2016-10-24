/**
 * Created by YYW on 2016/10/24.
 */
var toySchema = new Schema({
    color: String,
    name: String
});

var Toy = db.model('Toy', toySchema);

var validator = function (value) {
    return /blue|green|white|red|orange|periwinkle/i.test(value);
};
Toy.schema.path('color').validate(validator,
    'Color `{VALUE}` not valid', 'Invalid color');

var toy = new Toy({ color: 'grease'});

toy.save(function (err) {
    // err is our ValidationError object
    // err.errors.color is a ValidatorError object
    assert.equal(err.errors.color.message, 'Color `grease` not valid');
    assert.equal(err.errors.color.kind, 'Invalid color');
    assert.equal(err.errors.color.path, 'color');
    assert.equal(err.errors.color.value, 'grease');
    assert.equal(err.name, 'ValidationError');
});