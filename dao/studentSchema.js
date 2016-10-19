/**
 * Created by YYW on 2016/10/19.
 */
var mongoose = require('./mongoose.js')

var StudentSchema = new mongoose.Schema({
    name:String,
    clazzID : {
        type : mongoose.Schema.ObjectId,
        ref : 'Clazz'
    }
})

StudentSchema.statics = {
    findClazzNameByStudentName:function(name, callback){
        return this
            .findOne({name:name}).populate('clazzID')
            .exec(callback)
    }
    //其他方法省略..
}

module.exports = StudentSchema