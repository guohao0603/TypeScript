"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 定义一个操作mysql数据库的类 注意：要实现泛型接口 这个类也应该是一个泛型类
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
        console.log('mysql建立连接');
    }
    MySqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MySqlDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MySqlDb.prototype.get = function (id) {
        console.log('查询ID:', id);
        var list = [
            { name: 'jack', sex: 'man' },
            { name: 'Tony', sex: 'man' },
            { name: 'Lily', sex: 'woman' },
            { name: 'Mark', sex: 'man' },
        ];
        return list;
    };
    return MySqlDb;
}());
exports.MySqlDb = MySqlDb;
// 定义一个操作mssql数据库的类
var MsSql = /** @class */ (function () {
    function MsSql() {
        console.log('mssql建立连接');
    }
    MsSql.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MsSql.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MsSql.prototype.get = function (id) {
        console.log('查询ID:', id);
        var list = [
            { name: 'jack', sex: 'man' },
            { name: 'Tony', sex: 'man' },
            { name: 'Lily', sex: 'woman' },
            { name: 'Mark', sex: 'man' },
        ];
        return list;
    };
    return MsSql;
}());
exports.MsSql = MsSql;
