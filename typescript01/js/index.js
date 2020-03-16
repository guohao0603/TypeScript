"use strict";
console.log('Hello World!');
var flag = true;
flag = false;
console.log(flag);
/*
    A、vscode配置自动编译

    a.第一步   yarn add typescript -g

    a.第二步   tsc --inti 生成tsconfig.json   改 "outDir": "./js",

    c.第三步   任务 - 运行任务/终端 - 运行任务  监视tsconfig.json



    1、typeScript中的数据类型

    typescript中为了使编写的代码更规范，更有利于维护，增加了类型校验，在typescript中主要给我们提供了以下数据类型


        布尔类型（boolean）
        数字类型（number）
        字符串类型(string)
        数组类型（array）
        元组类型（tuple）
        枚举类型（enum）
        
        任意类型（any）
        null 和 undefined
        void类型
        never类型

*/
// 数字类型(number)
/*
    let num:number = 123;
    
    num = 456;

    console.log(num); 正确

    num = 'str' 错误
*/
// 字符串类型(string)
/*
    let str:string = '123';
    
    str = '456555';

    console.log(str); //正确

    str = "123" //错误
*/
// 数组类型(Array)
// 1.第一种定义方法
/*
    let arr:number[] = [11,22,33]

    console.log(arr)
*/
// 2.第二种定义方法
/*
    let arr:Array<number> = [11,22,34];

    console.log(arr)
*/
// 枚举类型 (enum) 自定义数据类型
/*
    enum Color {blue,red=3,orange};
    
    let c:Color = Color.blue;   // 如果没有赋值打印下标
    
    let b:Color = Color.red;
    
    console.log(3333,c,b)
*/
// 任意类型 (any)
/*
    let str:any = 12346;
    
    str = [12,23,4];
    
    console.log(str)

    let oBox:any = document.getElementById('box');
    
    oBox.style.color = 'red'
*/
// null 和 undefined 类型
/*
    let num:number | null | undefined | string;

    num = '121';

    console.log(num)
*/
// void 类型：typescript中的void表示没有任何类型，一般用于方法的时候方法没有返回值。
// es5 写法
/*
    function run() {
        console.log('num')
    }
    run()
*/
// es6 写法
/*
    let run= () => {
        console.log('箭头函数')
    }
    run()
*/
// 表示方法没有任何返回值
/*
    function run():void {
        console.log('void')
    }
    run()
*/
// 表示方法返回确定类型
/*
    function run():number {
        return 123;
    }
    console.log(run())
*/
// never 类型：其他类型(包括null 和 undefined) 的子类型，代表从不会出现的值。
// 这意味着声明never的变量只能被never类型赋值。
/*
    let a:never;

    // a = null   错误赋值

    a = (()=>{
        throw new Error('错误')
    })()
*/
/*
2、typeScript中的函数
    1.函数的定义
    2.可选参数
    3.默认参数
    4.剩余参数
    5.函数重载
    6.箭头函数
*/
// 1.函数的定义
// es5函数声明的方法
/*
    // 函数声明
    function run(){
        return 'run'
    }
    // 匿名函数
    var run2 = function (){
        return 'run2'
    }
*/
// ts中定义函数的方法
/*
    // 函数声明发
    
    function run():string{
        return 'run'
    }
    // 错误写法
    
    function run():string{
        return 123; // 返回的是string类型
    }
    // 匿名函数

    var fun2 = function():number{
        return 123;
    }

    console.log(fun2())

*/
// ts中定义方法传参
/*
    function getInfo(name:string,age:number):string{
        return `${name}---${age}`
    }
    console.log(getInfo("张三",123))

    var getInfo = function(name:string,age:number):string{
        return `${name}---${age}`
    }
    console.log(getInfo("杰克",23))

    // 没有返回值的方法

    function run():void{
        console.log('run')
    }
    run()
*/
// 方法可选参数
// es5里面方法的实参和行参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数 
/*
    function getInfo(name:string,age?:number):string{
        if (age) {
            return `${name}---${age}`
        }else {
            return `${name}---年龄保密`
        }
    }

    console.log(getInfo("jack",25));

    console.log(getInfo("Tonny"));

    // 注意可选参数必须配置到参数最后

    // 错误写法
    function getInfo(name?:string,age:number):string{

                if(age){

                    return `${name} --- ${age}`;
                }else{

                    return `${name} ---年龄保密`;
                }
               

    }
    
*/
// 默认参数,可选参数
// es5里面没法设置默认参数,es6和ts中都可以设置默认参数
/*
    function getInfo(name:string,age:number=20):string{
        if (age){
            return `${name} --- ${age}`
        }else {
            return `${name} --- 年龄保密`
        }
    }

    console.log(getInfo("张三",26))

    console.log(getInfo("赵四"))
*/
// 剩余参数
/*
    function sum(a:number,b:number,c:number,d:number):number{
        return a+b+c+d;
    }

    console.log(sum(1,2,3,4))

    // 三点运算符 接收新参数传过来的值

    function sum(...result:number[]):number{
        var sum = 0;

        result.map((item)=>{
            sum+=item
        })
        return sum;
    }

    console.log('-------',sum(1,2,3,4))

    function sum(a:number,b:number,...result:number[]):number{
        var sum=a+b;

        for(var i=0;i<result.length;i++){

            sum+=result[i];
        }

        return sum;

    }

    console.log(sum(1,2,3,4,5,6)) ;
    
*/
// ts函数重载
// java中方法的重载：重载指的是两个或者两个以上的同名函数，但他们的参数不一样，这时会出现函数重载的情况。
// typescript中的重载：通过为同一个函数提供多个函数类型定义来试下多种功能的目的。
// ts为了兼容es5已及es6 重载的写法和java中有区别
// es5出现同名的方法,下面个的方法会替换上面的方法
/*
    function css(config){

    }

    function css(config,value){


    }
    */
// ts中的重载
/*
    function getInfo(name:string):string;

    function getInfo(age:number):string;

    function getInfo(str:any):any{
        if (typeof str === 'string') {
            return '我叫' + str;
        }else {
            return '我的年龄是'+str;
        }
    }
    

    console.log(getInfo("张三"));

    console.log(getInfo(20))
*/
