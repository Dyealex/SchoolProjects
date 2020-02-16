// that darn calculator...
const currentResult = document.getElementById("currentResult")
function div() {
    let buttonFirst = document.getElementById("buttonFirst").value;
    let buttonSecond = document.getElementById("buttonSecond").value;
// That worked but I can't get the decimal points in.    
// had a % sign instead of the forward slash
    let ans = Number (buttonFirst) /  Number (buttonSecond)
// these are the input buttons
    currentResult.innerHTML = ans;

}

// error is can't access buttonFirst before initilization. Moving them up to under function.






