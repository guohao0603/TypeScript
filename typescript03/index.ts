/*
    接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，
    接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，
    同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
*/

// 1、属性接口 对json的约束

// ts中定义方法传入参数,对json进行约束

/*
function printLabel(labelInfo:{label:string}):void{
    console.log(labelInfo)
}

// printLabel('444'); // 错误的写法

// printLabel({name:'hahaha'}) // 错误的写法

// printLabel({label:'张三',age:20}) // 也不能多传

printLabel({label:'张三'})
*/

// 对批量方法传入参数进行约束

// 接口：行为和动作规范，对批量方法进行约束

// 就是传入对象的约束 属性接口

/*
interface FullName {
    firstName:string; // 注意分号结束
    secondName:string;
}
function printName (name:FullName){
    // 必须传入对象 firstName secondName
    console.log(name.firstName+'----'+name.secondName);
}
// printName('123')//错误

var obj ={
    age:20,
    firstName:'张',
    secondName:'三'
};
// printName({
//     age:20,
//     firstName:'张',
//     secondName:'三'
// })    // 错误写法 多传age 在obj可以

printName(obj)
*/

// 接口：可选属性

/*
interface FullName{
    firstName:string;
    secondName?:string; // 可以不传
}
function getName(name:FullName){
    console.log(name)
}
// 参数顺序可以不一样
getName({
    firstName:'hh',
    secondName:'kk' // 可以不传
})
*/


/*
       $.ajax({
             type: "GET",
             url: "test.json",
             data: {username:$("#username").val(), content:$("#content").val()},
             dataType: "json"             
         });
         
*/

// 对ajax传参限制

interface Config{
    type:string;
    url:string;
    data?:any;
    dataType:string;
}

// 原生js封装ajax

function ajax(config:Config){
    var xhr = new XMLHttpRequest();

    xhr.open(config.type,config.url,true);

    xhr.send(config.data);

    xhr.onreadystatechange=function(){

        if (xhr.readyState===4 && xhr.status === 200){
            console.log('请求成功');
            if (config.dataType==='json'){
                console.log(JSON.parse(xhr.responseText))
            }else {
                console.log(xhr.responseText)
            }
        }
    }
}

ajax({
    type:'get',
    data:"{name:'hh',age:20}",
    url:'http://5c9a0f551a4c360014a10065.mockapi.io/typeList',
    dataType:'json'
})

// 函数类型接口：对方法传入的参数 已及返回值进行约束 批量约束

// 加密类型约束

interface encrypt{
    (key:string,value:string):string;
}

var md5:encrypt = function(key:string,value:string):string{
    // 模拟操作
    return key+value
}

console.log(md5('name','Tony'))

//接口扩展：接口可以继承接口

/*
interface Animal {
    eat():void;
}

interface Person extends Animal{
    work():void;
}

class Web implements Person{
    public name:string;
    constructor(name:string){
        this.name = name;
    }

    eat(){
        console.log(this.name+'喜欢吃馒头')
    }

    work(){
        console.log(this.name+'写代码')
    }
}

var w = new Web('小李');

w.eat();
*/

/*
interface Animal{
    eat():void;
}

interface Person extends Animal{
    work():void;
}

class Programmer{
    public name:string;
    constructor(name:string){
        this.name = name;
    }

    coding(code:string){
        console.log(this.name+code)
    }
}

class Web extends Programmer implements Person{
    constructor(name:string){
        super(name)
    }

    eat(){
        console.log(this.name+'喜欢吃肉')
    }

    work(){
        console.log(this.name+'在工作')
    }
}

var w = new Web('小李');

w.coding('写代码');

w.eat();

w.work();
*/