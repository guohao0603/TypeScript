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
// 4、静态属性 静态方法
/*
function Person(){
    this.run1 = function(){

    }
}
Person.name = '哈哈';
Person.run2 = function(){ // 静态方法

}

var p = new Person();

Person.run2(); // 静态方法调用
*/
/*
class Person{
    public name:string;
    public age:number = 20;

    static sex = '男' // 静态属性

    constructor(name:string){
        this.name = name
    }

    run(){
        console.log(`${this.name} 在运动`) // 实例方法
    }

    static print(){
        console.log('print方法'+Person.sex)
    }
}

var p = new Person('张三');

p.run();

Person.print();

console.log(Person.sex)
*/
// 5、多态：父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现
// 多态属于继承
/*
class Animal {
    name:string;

    constructor(name:string){
        this.name = name;
    }

    eat(){  // 具体吃什么 不知道，具体吃什么?继承它的子类去实现 ，每一个子类的表现不一样
        console.log('吃的方法')
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'啃骨头'
    }
}
var dog= new Dog('小狗');
console.log(dog.eat());
class Cat extends Animal{
    constructor(name:string){
        super(name)
    }
    eat(){
        return this.name+'吃猫粮'
    }
}
var cat= new Cat('小猫');
console.log(cat.eat());
*/
//typescript中的抽象类：它是提供其他类继承的基类，不能被直接实例化
//用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包括具体实现并且必须在派生类中实现。
//abstract抽象方法只能放在抽象类里面。
//抽象类和抽象方法用来定义标准。标准：Animal 这个类要求它的子类必须包含eat方法
//标准：
/*
abstract class Animal{
    public name:string;
    constructor(name:string){
        this.name = name;
    }

    abstract eat():any;//抽象方法不包含具体实现并且必须在派生类中实现。
}

// var a = new Animal(); // 不可被实例化

class Dog extends Animal{
       //抽象类的子类必须实现抽象类里面的抽象方法
       constructor(name:any){
        super(name)
    }

    eat(){
        console.log(this.name+'啃骨头')
    }
}

var d = new Dog('旺财');
d.eat();

class Cat extends Animal{
    //抽象类的子类必须实现抽象类里面的抽象方法
    constructor(name:any){
        super(name)
    }
    run(){


    }
    eat(){

        console.log(this.name+'吃老鼠')
    }
}
var c=new Cat('小花猫');
c.eat();
*/
