// Promise code along..with Morgan and Harcourt 2/25

// complicated math
function someMath() {
for ( i = 0; i<10000;i ++) {
if (i = 10000)
console.log(i)
}
}
// where the promise goes
function waitForMath(){
return new Promise ((resolve, reject) => {
    try {
        resolve (someMath());
        
    
    } catch (error) {
        reject ('error:numbers arent real');
    }
})
}

waitForMath().then(res => {
    console.log(res)
})