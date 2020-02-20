var intervalID = setInterval(drawText, 1000)

function drawText () {
    document.querySelector("p").textContent= "@\n";
}
var intervalID= setInterval(drawText, 1000);
// The above thing works but I am trying something else

// 


// function drawText () {
//     document.querySelector("p").textContent+="@\n";


// }
// // let i = 1;
// setTimeout(function run() {
//   drawText(i++);
//   setTimeout(run, 10);
// }, 10);

// var intervalID = setInterval(drawText, 10)
// function drawText() {
//     setTimeout(myTimeout1, 2000) 
//     setTimeout(myTimeout2, 4000) 
//     setTimeout(myTimeout3, 6000) 
//   }
//   function myTimeout1() {
//     document.getElementById("p").innerHTML = "2 seconds";
//   }
//   function myTimeout2() {
//     document.getElementById("p").innerHTML = "4 seconds";
//   }
//   function myTimeout3() {
//     document.getElementById("p").innerHTML = "6 seconds";
//   }