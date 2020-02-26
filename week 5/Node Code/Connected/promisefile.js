let thePromise = new Promise ((resolve, reject) => {

    let a = 1 + 22;
    if (a == 23) {
        resolve('success!')
console.log(a.toString())
    }else {
        reject("fail!")
    }
})
thePromise.then((message) => {
    console.log('This is a THEN '+ message)

}).catch((message) => {
    console.log('this is a CATCH ' + message)
})

exports.thePromise = thePromise;