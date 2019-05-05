// function test(callback) {
//     setTimeout(() => {
//         callback();
//     }, 1000)
// }

// function test() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve();
//         }, 1000)
//     })
// }

function fetchData(){
    return new Promise((resolve,reject)=>{
        //1~2 초 걸리는 작업
        const data = {user:'jack'};

        // resolve(data);
        resolve('aa');
    })
}

fetchData()
    .then((result) => {
        console.log(result);
        return 2;
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
        return 'error'
    })
    .then((result)=>{
        console.log('done')
    })
// console.log('test start')
// test(() => {
//     console.log('after 1 sec')
// });
// console.log('test done')

