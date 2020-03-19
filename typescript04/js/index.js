"use strict";
/*
     泛型的定义
     泛型函数
     泛型类
     泛型接口
*/
/*
泛型：软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。

组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统

时为你提供了十分灵活的功能。在像c#和Java这样的语言中，可以使用泛型来创建可

复用的组件，一个组件可以支持多种类型的数据。这样用户就可以以自己的数据类型

来使用组件。通俗理解：泛型就是解决 类 接口 方法的复用性、已及对不特定的数据

类型的支持(类型校验)
*/
// 只能返回string类型的数据
/*
function getData(value:string):string{
    return value;
}
*/
// 同时返回string类型和number类型 (代码冗余)
/*
function getData1(value:string):string{
    return value;
}

function getData2(value:number):number{
    return value;
}
*/
// 同时返回string类型和number类型 any可以解决这个问题
/*
function getData(value:any):any{
    return '哈哈哈'
}

getData(123);

getData('123');
*/
// any放弃了类型检查，传入什么返回什么。比如：传入number 类型必须返回number类型
// 传入参数的类型和返回类型可以不一致
// 泛型：可以支持不特定的数据类型 要求：传入的参数进而返回的参数一致
// T 表示泛型，具体什么类型是调用这个方法的时候决定的
/*
function getData<T>(value:T):T{
    return value
}

console.log(getData<number>(123));
console.log(getData<string>('这是一个泛型'));
*/
// 泛型类：比如有个最小堆算法，需要同时支持返回数字和字符串 a - z 两种类型。
/*
class MinClass{
    public list:number[]=[];

    add(num:number){
        this.list.push(num)
    }

    min():number{
        var minNum = this.list[0];
        for(var i = 0;i<this.list.length;i++){
            if (minNum>this.list[i]){
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
var m = new MinClass();
m.add(3);
m.add(13);
m.add(31);
m.add(25);
m.add(30);

console.log(m.min())
*/
// 类的泛型
/*
class MinClass<T>{
    public list:T[]=[];

    add(num:T){
        this.list.push(num)
    }

    min():T{
        var minNum = this.list[0];
        for(var i = 0;i<this.list.length;i++){
            if (minNum>this.list[i]){
                minNum = this.list[i]
            }
        }
        return minNum
    }
}
var m1 = new MinClass<number>();
m1.add(3);
m1.add(13);
m1.add(31);
m1.add(25);
m1.add(30);

console.log(m1.min())

var m2 = new MinClass<string>();
m2.add('f');
m2.add('e');
m2.add('t');
m2.add('o');
console.log(m2.min())
*/
//函数类型接口
/*
interface ConfigFn{
    (value1:string,value2:string):string;
}

var setDate:ConfigFn = function(value1:string,value2:string):string{
    return value1+value2;
}

console.log(setDate('name','张三'));
*/
// 1、泛型接口
/*
interface ConfigFn{
    <T>(value:T):T;
}
var getData:ConfigFn=function<T>(value:T):T{
    return value;
}
getData<string>('张三'); // 正确

getData<string>(123) // 错误
*/
//2、泛型接口
/*
interface ConfigFn<T>{
    (value:T):T;
}

function getData<T>(value:T):T{
    return value;
}

var myGetData:ConfigFn<string>=getData;

myGetData('20'); // 正确

// myGetData(20);// 错误
*/
/*
    泛型类：泛型可以帮助我们避免重复的代码已及对不特定的数据类型的支持(类型校验)，下面我们看看把类当做参数的泛型类

    1、定义个类

    2、把类作为参数来约束数据传入的类型

*/
/*
    定义一个User类这个类的作用就是映射数据库字段然后定义一个MysqlDb的类这个类

    用于操作数据库然后把User类作为参数传入到MysqlDb中

    var user = new User({
        username:'张三',
        password:'123'
    })

    var db = new MysqlDb();
    db.add(user)
*/
// 把类作为参数来约束数据传入的类型
/*
class User{
    username:string | undefined;
    password:string | undefined;
}

class MysqlDb{
    add(user:User):boolean{
        console.log(user)
        return true;
    }
}

var u = new User();
u.username = '张三';
u.password = '123';

var Db = new MysqlDb();
Db.add(u);
*/
/*
class ArticleCate{
    title:string | undefined;
    desc:string | undefined;
    status:number | undefined;
}

class MysqlDb{
    add(info:ArticleCate):boolean{
        console.log(info);
        return true;
    }
}

var a = new ArticleCate();
a.title = '2020';
a.desc = '中国春节';
a.status = 1;

var Db = new MysqlDb();
Db.add(a);

// 问题：代码重复
*/
// 定义操作数据库的泛型类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.updated = function (info, id) {
        console.log('更新的数据', info);
        console.log('需要修改数据的id', id);
        return true;
    };
    return MysqlDb;
}());
//想给User表增加数据
// 1、定义一个User类 和数据库进行映射
/*
class User{
    username:string | undefined;
    pasword:string | undefined;
}
var u=new User();
u.username='张三';
u.pasword='123456';
var Db=new MysqlDb<User>();
Db.add(u);
*/
//2、相关ArticleCate增加数据 定义一个ArticleCate类 和数据库进行映射
var ArticleCate = /** @class */ (function () {
    function ArticleCate(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return ArticleCate;
}());
// 增加操作
var a = new ArticleCate({
    title: '分类',
    desc: '分类描述',
    status: 1
});
// 类当做参数的泛型类
var Db = new MysqlDb();
Db.add(a);
// 修改数据
var a2 = new ArticleCate({
    title: '修改分类',
    desc: '修改描述'
});
a2.status = 2;
Db.updated(a2, 1);
