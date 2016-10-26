 /**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js');
var Address = require('./addressModel.js');
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
schoolSchema.statics.findaddress = function (name,callback) {
    return this.find({'name':name}).populate('address').exec(callback);
}
module.exports = schoolSchema;