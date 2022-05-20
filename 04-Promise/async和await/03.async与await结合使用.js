// 目的： 将三个指定html文件内容合并显示
const fs = require('fs'); //读取文件模块
const util = require('util') //提供常用函数的集合，用于弥补核心JavaScript 的功能 过于精简的不足

const mineReadFile = util.promisify(fs.readFile)


// 回调函数方式实现 
// fs.readFile('../resource/1.html', (err, data1) => {
//     if (err) throw err;
//     fs.readFile('../resource/2.html', (err, data2) => {
//         if (err) throw err;
//         fs.readFile('../resource/3.html', (err, data3) => {
//             if (err) throw err;
//             console.log(data1 + data2 + data3);
//         })
//     })
// })

// async与await结合实现
async function main() {
    try {
        // 读取第一个文件内容
        let data1 = await mineReadFile('../resource/1.html')
        let data2 = await mineReadFile('../resource/2.html')
        let data3 = await mineReadFile('../resource/3.html')

        console.log(data1 + data2 + data3);
    } catch (error) {
        console.log(error);
    }
}
main()