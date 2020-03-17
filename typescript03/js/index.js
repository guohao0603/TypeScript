"use strict";
/*
    接口的作用：在面向对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。接口定义了某一批类所需要遵守的规范，
    接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它只规定这批类里必须提供某些方法，提供这些方法的类就可以满足实际需要。 typescrip中的接口类似于java，
    同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等。
*/
// 原生js封装ajax
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log('请求成功');
            if (config.dataType === 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
ajax({
    type: 'get',
    data: "{name:'hh',age:20}",
    url: 'http://5c9a0f551a4c360014a10065.mockapi.io/typeList',
    dataType: 'json'
});
var md5 = function (key, value) {
    // 模拟操作
    return key + value;
};
console.log(md5('name', 'Tony'));
