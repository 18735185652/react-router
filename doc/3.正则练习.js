
// 正则练习
//1) 可以出现小数点也可以不出现小数点，但是一旦出现 后面必须跟着一位或者多位数字
//2)最开始可能有 +/- 也可以没有
//3）正数部分，一位数可以是0-9之间的一个，多位数不能以0开头

let reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/
reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/;

//年龄介于18到65之间 18-19 20-59 60-65
let reg = /^(1[8-9]|[2-5][0-9]|6[0-5])$/;
console.log(reg.test(66))



// 编写一个125-255范围的正则 1 25-29 30
let reg = /(1((2[5-9])|([3-9][0-9])))|(2([0-4][0-9])|5[0-5])/
// console.log(reg.test(168))
for (let i = 114; i < 260; i++) {
    console.log(i, reg.test(i));
}



// url查询字符串参数获取
let str = "https://www.baidu.com/?mid=10000&cid=123456&app=1.0";
let reg = /([^?=&]+)=([^?=&]+)/g;

let obj = {};
str.replace(reg, function () {
    obj[arguments[1]] = arguments[2]
})
console.log(obj)



// 日期转换
let str = "2018-9-24 14:06:00";
let reg = /^(\d{4})[-/](\d{1,2})[-/](\d{1,2}) +(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
let ary = [];

str.replace(reg, function () {
    ary = (ary.slice.call(arguments)).slice(1, 7);
})
let resStr = "{0}年{1}月{2}日 {3}时{4}分{5}秒"
let reg = /{(\d+)}/g;
resStr = resStr.replace(reg, function () {
    let num = arguments[1];
    console.log('arguments: ', arguments);
    let val = ary[num];
    val.length === 1 ? val = "0" + val : void 0;
    return val;
})
console.log(resStr)

//封装
String.prototype.myFormatTime = function () {
    let reg = /^(\d{4})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:\s+)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})$/g
    let ary = [];
    this.replace(reg, function () {
        ary = ary.slice.call(arguments).slice(1, 7);
        console.log(ary)
    });
    let format = arguments[0] || "{0}年{1}月{2}日 {3}时{4}分{5}秒"
    return format.replace(/{(\d+)}/g, function () {
        let val = arguments[1]
        return ary[val].length === 1 ? "0" + ary[val] : ary[val];
        //return ary[arguments[1]]
    })
}


let str = "2018.9.24 14:6:09"
console.log(str.myFormatTime())

//设置cookie
function setCookie(obj, time){
    time = new Date(Date.now() + (time ? time : 0) * 365*24*60*60*1000).toUTCString();
    for(var key in obj){
        document.cookie = key + "=" + obj[key] + ';expires=' + time;
    }
}
//获取cookie
function getCookie(attr){
    var arr = document.cookie.match(new RegExp('\\b' + attr + '=([^;]+)(;|$)'));
    return arr ? arr[1] : "";
}
//移除cookie
function removeCookie(attr){
    var obj = {};
    obj[attr] = "";
    setCookie(obj, -1)
}


/*
元字符:
每一个正则表达式都是由元字符和修饰符组成的

[元字符] -> 在// 之间具有意义的一些字符
1.具有特殊意义的元字符
\：转义字符
    ^: 以某一个元字符开始
$: 以某一个元字符结尾
\n: 匹配一个换行符
    .: 除了\n意外的任意字符
var reg = /^0.2$/; //以0开头，以二结尾，中间可以是除了\n的任意字符
console.log(reg.test("0.2"))//true
console.log(reg.test("0-2"))//true
reg = /^0\.2$/;
console.log(reg.test("0.2"))//true
console.log(reg.test("0-2"))//false

(): 分组 -> 把一个大正则本身划分成几个小的正则
1.分组的作用一：改变x | y的默认优先级
var reg = /^(18|19)$/
var reg = /^(\d+)zhufeng(\d+)$/; //->"2015zhufeng2016"
x | y: x或者y中的一个
[xyz]: x或者y或者z中的一个
[^ xyz]: 除了三个以外的任何一个字符
[a - z] : a - z之间的任何一个字符
[^ a - z] : 除了a - z之间的任何一个字符
\d: 一个0 - 9之间的数字 \D: 除了0 - 9之间数字以外的任意字符
\b: 匹配一个边界符 "w1 w2 w3"
\w: 数字 字母 下划线中的任意一个字符[0 - 9a - zA - Z_]
\s: 匹配一个空白字符 制表符(tab 四个空格) 换页符...

2.代表出现次数的量词元字符
    *: 出现0到多次
        +: 出现1到多次
            ?: 出现0次或一次
{ n }: 出现n次
{ n,}: 出现n到多次
{ n, m }: 出现n到m次

*/

let str1 = "This is a big big_dog!";
let reg = /big\b/g;

let s = reg.exec(str1)
let t = reg.exec(str1)
console.log('s: ', s);
console.log('t: ', t);