"use strict";
/*

功能：定义一个操作数据库的库---支持 Mysql Mssql MongoDb

要求1：Mysql MsSql MongoDb功能一样 都有 add update delete get 方法

注意：约束统一的规范、以及代码重用

解决方案：需要约束规范所以要定义接口，需要代码重用所以用到泛型

    1、接口：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范

    2、泛型 通俗理解：泛型就是解决 类 接口 方法的复用性。
*/
Object.defineProperty(exports, "__esModule", { value: true });
// 操作用户表 定义一个User类和数据表作映射
var user_1 = require("./model/user");
var article_1 = require("./model/article");
var u = new user_1.UserClass();
u.username = '张三';
u.password = '12345';
user_1.UserModel.add(u);
var uData = user_1.UserModel.get(14);
console.log(uData);
var a = new article_1.ArticleClass();
a.title = 'xxxxx';
a.desc = 'xxxxxxxxxx';
article_1.ArticleModel.add(a);
var aData = article_1.ArticleModel.get(11);
console.log(aData);
