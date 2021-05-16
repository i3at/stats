ReactDOM.render(<h1>Ex1</h1>, document.getElementById("root"));

function PersionF(name, age) {    
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        return "Hello, I'm " + this.name;
    }
}
var p1 = new PersionF("Ex1F", 1);
console.log(p1);
console.log(p1.sayHello());

class Persion {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sayHello(){
        return "Hello, I'm " + this.name;
    }
}

class Child extends Persion {
    constructor(name, age, hobby){
        super(name, age);
        this.hobby = hobby;
    }
    sayHello(){
        return "Hi, I'm " + this.name + ", i like " + this.hobby;
    }
}

var p2 = new Persion("Ex1", 2);
console.log(p2);
console.log(p2.sayHello());

var aChild = new Child('Teo', 3, "Soccer");
console.log(aChild);
console.log(aChild.sayHello());