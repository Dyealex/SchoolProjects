// exercise wait


//   This may not work as you intended but I did manage to get it to do what I wanted it to do so I feel GOOOD! 


let thePromise=require('./promisefile.js')


// console.log(`message${thePromise.message("What the heck...?")}`);
    // console.log(`message${thePromise.return("What the heck...?")}`);
    // console.log(`message${thePromise.alert("What the heck...?")}`);

    let printNumbers = (0,10)
    // function printNumbers(to, from) {
        let current =  0;
        // added the lines above
    // setTimeout(function(printNumbers) { original line
        setTimeout(function go() {
        // trying to get it to log the numbers. adding the console.log printnumbers to see what happens.
        // console.log(printNumbers(0-10))
        printNumbers(0, 10);
        console.log("That was a LOONNGGG 10 seconds!"); }, 10000)
        function addText () {
                return "Hello World!"
            }
            console.log ("Hello World!")

            function addText () {
                return ""
            }
        
            console.log ("Going to work on something more funner")
            console.log("I PROMISE to work on this later")




