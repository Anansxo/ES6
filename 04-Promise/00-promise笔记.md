## promise的状态改变
实例对象中的一个属性 【PromiseState】
1. pending（未决定的） 变为 resolved/fullfilled   成功
2. pending 变为 rejected   失败
说明：只有这两种状态，且一个promise对象只能改变一次
    无论变为成功还是失败，都会有一个结果数据
    成功的结果一般称为value/result，失败一般reason/error

## promise 对象的值
实例对象属性 【PromiseResult】
对象 【成功/失败】的结果
- resolve
- reject

## Promise工作流程
1. new一个Promise()
2. 执行异步操作
    - <b>成功</b>： 调用resolve() -> 将Promise状态改为【成功】-> 在调用then方法时，将调用的是第一个回调函数当中的代码，返回一个新的Promise对象

    - <b>失败</b>： 调用reject() -> 将Promise状态改为【失败】-> 在调用then方法时，将调用的是第二个回调函数当中的代码，返回一个新的Promise对象

## Promise API 
1. Promise 构造函数：Promise(executor){}
    - executor函数： 执行器 (resolve,reject) => {}
    - resolve函数：内部定义成功时我们调用的函数 value => {}
    - reject函数: 内部定义失败时我们调用的函数error => {}
    【说明】：executor会在Promise内部立即同步调用，异步操作在执行器中执行

### Promise.prototype.then方法: (onResolved, onRejected)=>{}
1. onResloved函数： 成功的回调函数 (value)=>{}
2. onRejected函数： 失败的回调函数 (error)=>{}
【说明】指定用于得到成功value的成功回调和用于得到失败reason的失败回调，返回一个新的promise对象 

### Promise.resolve方法：(value)=>{}
- value: 成功的数据或promise对象
【说明】返回一个成功或者失败的promise对象

### Promise.reject方法： (error)=>{}
- error： 失败的原因
【说明】返回一个失败的 promise 对象

### Promise.all方法：(promises)=>{}
- promises: 包含 n个 promise的数组
【说明】返回一个新的promise,只有所有的promise都成功才成功，只要有一个失败了就直接失败

### Promise.race方法： (promises)=>{}
- promises: 包含 n个 prmise的数组
【说明】返回一个新的promise, 第一个完成的promise的结果状态就是最终的结果状态

## 改变promise状态和指定回调函数先后问题？
1. 都有可能，正常情况是先指定回调再改变状态，但也可以先改变状态再指定回调
2. 如何先该状态再指定回调？
- 在执行器中直接调用 resolve()/reject()
- 延长时间再调用then方法（定时器）
<br>
- 当执行器函数中任务都是同步任务直接调用resolve()时，此时先改变promsie-对象的状态，再执行.then方法的回调函数
- 当执行器函数中任务为异步任务的时候，先执行then方法中的回调函数，之后再改变promise对象状态

3. 获取数据
- 先指定回调函数，后改变状态时，等promise状态改变后再去调用then方法中成功失败的回调函数结果