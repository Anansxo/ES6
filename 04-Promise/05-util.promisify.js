/* 
util.promise方法
*/
// 引入 util 模块
const util = require('util')
// 引入fs模块
const fs = require('fs')

// 将fs.readFile传递个给mineReadFile，将返回一个新函数mineReadFile
let mineReadFile = util.promisify(fs.readFile);

mineReadFile('./resource/content.txt').then(value=>{
    console.log(value.toString());
})