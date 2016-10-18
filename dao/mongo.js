var mongoose = require('./mongoose.js');

var Schema = mongoose.Schema;
var schoolSchema = new Schema({
    addusername: {type: String, default: "匿名"},
    date: {type: Date, default: Date.now()},
    num: {type:Number,min:10,max:50},
    name: String,
    t_obj: Array,
    address:[{type:Schema.Types.ObjectId, ref:'address'}],
    content: {type: Schema.Types.Mixed}
}, {collection: "school"});


// schoolSchema.methods.findbyusername = function(name,callback){
//     return this.model("School").find({name:"上海中学"},callback)
// };

// schoolSchema.methods.findbyusername = function(name,callback){
//     return this.model("School").find({"name":"上海中学"},callback);
// };
schoolSchema.statics.findobj = function(callback){

    var query = function (cb) {
        var temp = this.model("School").findOne({"num":13}).select({address:1,_id:0});
        cb()
    }
    var cb = function () {
        var tempid = this.address;
        return tempid;
    }
    
    console.log("temp"+temp);
   
    // return this.findOne({_id:tempId}).populate("address").exec(callback);
    return temp.exec(callback)
}
var School = mongoose.model('School', schoolSchema);
// function abcd(){
//     var abc = new School();
//     abc.findbyusername('上海中学', function(error, result){
//         if(error) {
//             console.log(error);
//         } else {
//             console.log(result);
//         }
//     });
// }
// exports.abcd = abcd;

//通过实例插入字段
var saveobj = function (val1, val2, val3, val4) {
    this.val1 = val1;
    this.val2 = val2;
    this.val3 = val3;
    this.val4 = val4;
    var schoolobj = new School({
        addusername: val4,
        num: val1,
        name: val3,
        t_obj: ["a", val2],
        content: {
            "root": "A",
            "node": [{
                "structure": {
                    "name": "A",
                    "father": null,
                    "children": ["B", "C"],
                    "feature": 1
                }, "content": {
                    story_content: "This is A.",
                    author: "333"
                }
            },
                {
                    "structure": {
                        "name": "B",
                        "father": "A",
                        "children": ["D", "E", "F"],
                        "feature": 1
                    },

                    "content": {
                        story_content: "This is B.",
                        author: "333"

                    }
                }]
        }
    });
    schoolobj.save(function (err) {
        if (err)
            console.log("出错！" + err)


    })
}

var addfields = function(){
    var condition = {};
    var update = {$set:{"address":[]}};
    var option = {upsert:true,multi:true};
    School.update(condition,update,option,function(err){
        if(err) {console.log(err)}
        else{
            console.log("输入成功")
        }
    });

    
}
// var insertaddress = function(num,address){
//     School.findandmodify({"num":num},{$pull:{}})
// }


var removeobj = function(){
    School.remove({name:"冰山中学"},function(err){
        if(err){
            console.log(err)
        }else{
            console.log("delete ok")
        }
    })
}
// //通过model增加记录
// var modelsave = function (val1, val2, val3, val4) {
//     School.create({
//         addusername: val4,
//         num: val1,
//         name: val3,
//         t_obj: ["a", val2],
//         content: {
//             "root": "A",
//             "node": [{
//                 "structure": {
//                     "name": "A",
//                     "father": null,
//                     "children": ["B", "C"],
//                     "feature": 1
//                 }, "content": {
//                     story_content: "This is A.",
//                     author: "333"
//                 }
//             },
//                 {
//                     "structure": {
//                         "name": "B",
//                         "father": "A",
//                         "children": ["D", "E", "F"],
//                         "feature": 1
//                     },
//
//                     "content": {
//                         story_content: "This is B.",
//                         author: "333"
//
//                     }
//                 }]
//         }
//     },function(error){
//         if(error){
//             console.log(error)
//         }else{
//             console.log("MODEL save success!")
//         }
//     })
// };
//根据name 直接 查询
// var query = function(){
//     var criteria = {"num":{$gt:15}};
//     // var fields = {num:1,name:1,addusername:1};
//     var fields = "num name addusername"
//     var options = {};
//     // School.find(criteria,fields,options,function (error, result) {
//     //     if(error){
//     //         console.log(error)
//     //     }else{
//     //         console.log(result)
//     //         console.log(result.length)
//     //         for(var i =0;i<result.length;i++){
//     //             console.log(result[i].name)
//     //         }
//     //     }
//     // })
//    School.count(criteria,function(err,count){
//        if(err){
//            console.log(err);
//        }
//        else{
//            console.log(count)
//        }
//    })
// };


// exports.saveobj = saveobj;
// module.exports =abcd;
// module.exports = query;
// exports.removeobj=removeobj;
// exports.saveobj = saveobj;

// module.exports = saveobj;
module.exports = School;