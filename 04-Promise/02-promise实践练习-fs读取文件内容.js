const fs = require('fs')

// fs.readFile('./resource/content.txt', (err, data)=>{
//     // 如果出错 则抛出错误
//     if(err) throw err;
//     // 输出文件内容 转换为字符串
//     console.log(data.toString()); 
// })

// promise实现
let p = new Promise((resolve, reject)=>{
    // node自带模块 路径+回调(错误参数，成功参数)
    fs.readFile('./resource/content.txt', (err,data)=>{
        // 如果出错reject
        if(err) reject(err);
        // 如果成功resolve
        reject(data.toString());
    })
 })

//  then方法
p.then(value=>{ //成功且接受成功的值
    console.log(value);
},error=>{ //失败且接受失败的值
    console.log(error);
})