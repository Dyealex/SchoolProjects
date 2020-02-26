let p = new Promise ((resolve, reject) => {

    let a = 1 + 1;
    if (a == 23) {
        resolve('Success')

    }else {
        reject("failed")
    }
})
p.then((message) => {
    console.log('This is a then '+ message)

}).catch((message) => {
    console.log('this is the catch ' + message)
})