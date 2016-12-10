/**
 * Created by YYW on 2016/8/12.
 */
class Animal{
    constructor(name){
        this.name = name
    }
    sayName(){
        console.log(`My name is ${this.name}`)
    }
}

class Tiger extends Animal{
    constructor(name){
        super(name)
    }
    eat(){
        console.log("I am eating......")
    }
}

var animal = new Animal('cat');
var tiger  = new Tiger('yyw');
animal.sayName();
tiger.sayName();
tiger.eat();