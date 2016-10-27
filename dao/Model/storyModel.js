/**
 * Created by YYW on 2016/10/26.
 */
var mongoose = require('../mongoose.js');
var storySchema = require('../Schema/storySchema');
var Story = mongoose.model('Story',storySchema);

module.exports = Story;
    