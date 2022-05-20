/* 
封装一个函数 mineReadFile 读取文件内容
参数：path 文件路径
返回：promise 对象
*/

function mineReadFile(path) {
    return new Promise((resolve, reject) => {
        // 读取文件 
        // node自带模块 路径+回调(错误参数，成功参数)
        require('fs').readFile(path, (err, data) => {
            // 错误情况
            if (err) reject(err);
            // 成功 
            resolve(data);
        })
    })
}

mineReadFile('./resource/content.txt')
.then((value)=>{
    console.log(value.toString());
},(error)=>{
    console.log(error);
})