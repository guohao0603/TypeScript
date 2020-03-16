"use strict";
// 4、typescript中的类
/*
    1、类的定义
    2、继承
    3、类里面的修饰符
    4、静态属性 静态方法
    5、抽象类 继承 多态
*/
// ts中类的定义
/*
    class Person {
        
        name:string; // 属性 前面省略了public关键词

        constructor(name:string){ // 构造函数 实例化类的时候触发的方法
            this.name = name;
        }

        getName():string{
            return this.name;
        }
        setName(name:string):void{
            this.name = name;
        }
        run():void{
            console.log(this.name)
        }

    }

    var p = new Person('张三1');
  
    console.log(p.getName()); // 张三

    p.setName('李四')

    console.log(p.getName());// 李四
    
*/
// 2、ts中实现继承 extends 、super
/*
class Person {
    name:string;

    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name} 在运动`
    }
}

var p = new Person('王五');

console.log(p.run())

class Web extends Person{
    constructor(name:string){
        super(name);
    }

    run():string{
        return `${this.name} 在运动---子类`
    }
    work(){
        console.log(`${this.name} 在工作`)
    }
}

var w = new Web('赵四');
console.log(w.run()) // 如果有同名方法 优先使用子类的方法
w.work();
*/
// 3、类里面的修饰符 typescript 里面定义属性的时候给我们提供了三种修饰符
/*
    public:公有     在当前类里面、子类、类外面都可以访问
    protected:保护类型      在当前类里面、子类里面可以访问，在类外部无法访问
    private:私有        在当前类里面可以访问，子类、类外部都无法访问属性

    属性如果不加修饰符 默认就是 公有(public)
*/
// public:公有 在类里面、子类、类外面都可以访问
/*
class Person{
    public name:string; // 公有属性

    constructor(name:string){
        this.name = name;
    }
    run():string{
        return `${this.name}在运动`
    }
}

var p = new Person('王五');
console.log(p.run());

class Web extends Person{
    constructor(name:string){
        super(name);
    }
    run():string{
        return `${this.name} 在运动---子类`
    }
    work(){
        console.log(`${this.name} 在工作`)
    }
}

var w = new Web('李四')
w.work();
*/
// 类外部访问公有属性
/*
class Person{
    public name:string; // 公有属性

    constructor(name:string){
        this.name = name;
    }
    run():string{
        return `${this.name}在运动`
    }
}

var p = new Person('王五');
console.log(p.name);
*/
// protected:保护类型 在类里面、子类里面可以访问，在类外部无法访问
/*
class Person{
    protected name:string; // 公有属性

    constructor(name:string){
        this.name = name;
    }
    run():string{
        return `${this.name}在运动`
    }
}

var p = new Person('王五');
console.log(p.run());

class Web extends Person{
    constructor(name:string){
        super(name);
    }
    run():string{
        return `${this.name} 在运动---子类`
    }
    work(){
        console.log(`${this.name} 在工作`)
    }
}
var w = new Web('李四')
w.work();
*/
// 类外部无法访问保护类型属性
/*
class Person{
    protected name:string; // 公有属性

    constructor(name:string){
        this.name = name;
    }
    run():string{
        return `${this.name}在运动`
    }
}

var p = new Person('类外部无法访问');
console.log(p.name);
*/
// private :私有 在类里面可以访问、在子类，类外部无法访问
/*
class Person{
    private name:string; // 公有属性

    constructor(name:string){
        this.name = name;
    }
    run():string{
        return `${this.name}在运动`
    }
}

var p = new Person('王五');
console.log(p.run());

class Web extends Person{
    constructor(name:string){
        super(name);
    }
    run():string{
        return `${this.name} 在运动---子类`
    }
    work(){
        console.log(`${this.name} 在工作`)
    }
}
var w = new Web('李四')
w.work();
*/
/*
class Person{

    private name:string;  // 私有属性

    constructor(name:string){
        this.name=name;
    }

    run():string{

        return `${this.name}在运动`
    }
}

var p = new Person('hihi');
console.log(p.run())
*/ 
