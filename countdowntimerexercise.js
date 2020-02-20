// This is totally broken. Now I can't get it to do anything and can't find the original page that I got it from!!!!! And it is now 2:49!!!
// found another source. Could never find the original one...


function printNumbers(from, to) {
    let current = from;
  
    setTimeout(function go() {
    //   alert(current);
      if (current < to) {
        setTimeout(go, 1500);
        document.getElementById("stupidCrap").innerHTML=current++;
      }
    //   current++;
    }, 1500);
  }
//   changed plus plus to plus 1..and it stopped at 1
  // usage:
  printNumbers(0,  11);
//   changed 1 to zero to see what happens
// changed 10 to 11

//   don't touch anything!!!!
// no way this will work!!!
// Oh, this will be the death of me. It works but counts every other number!!!!
























