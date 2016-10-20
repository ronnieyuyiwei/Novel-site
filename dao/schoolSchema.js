 /**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js');
var Address = require('./addressSchema.js');
var Schema = mongoose.Schema;
var schoolSchema = new Schema({
    addusername: {type: String, default: "匿名"},
    date: {type: Date, default: Date.now()},
    num: {type: Number, min: 10, max: 50},
    name: String,
    t_obj: Array,
    address: [{type: Schema.Types.ObjectId, ref: 'Address'}],
    content: {type: Schema.Types.Mixed}
}, {collection: "school"});

module.exports = schoolSchema;