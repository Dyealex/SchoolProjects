


const http = require('http');
const port = 8080;
// document.getElementById(textInput).innerHTML=style="h1"
// let write1 = ("Hello World!!!")
const server = http.createServer (function (req, res) {
    res.writeHead(200,{'content-type': 'text/html'});
        res.write("<h1>Hello World!!!</h1>")
        res.write("Call back hell can't be any worse than this!! I will try later to figure out how to get the h1 tag around this." );
        // document.write("<h1>Hello World!</h1>")
        // document.writeln("<h1>Hello World!</h1>")
        // document.getElementById(write1).innerHTML=style="h1"
    // res.write.document.getElementById("").textInput=style="h1"
        res.end();   
})
server.listen(port, function(error) {
if (error) {
    console.log('something went wrong', error)
} else {
    // document.write("<h1>Hello World!</h1>")
    console.log('this totally sucks and I have no idea what the hell is happening on ' + port)

}

})


// const http = require('http');
// const port = 1234
// const server = http.createServer (function (req, res) {
//     res.writeHead(200,{'content-type': 'text/html'});
//     res.write('This was far harder that I  it to be!!');
//     res.end();
// }).listen(1234);