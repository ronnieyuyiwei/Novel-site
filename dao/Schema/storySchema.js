/**
 * Created by YYW on 2016/10/26.
 */
var mongoose = require('../mongoose');
var Schema = mongoose.Schema;
var storySchema = new Schema({
   _creator:{type:Number , ref: 'Person'},
    title: String,
    fans : [{type:Number , ref :'Person'}]
});

module.exports = storySchema;