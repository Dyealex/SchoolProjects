// Javascript autocomplete


var flavors =[
    "mint",
    "vanilla",
    "chocolate",
    "strawberry",
    "cookies and cream"

]
function autocomplete(){
    var input = document.getElementById("userInput").value;
    console.log(isNumeric)
    console.log(containSpecial)
    if(isValid(input)){
        flavors.forEach(function(flavor){
        for(flavor of flavors){
            if (flavor.startsWith(input)){
        }
    }
// negative case or error function
    } else {
        console.log("invalid input");
        // change to alert when done
    }
    function isValid(input){
        try{
            parseInt(input);
    
            return false;
        }
        catch(error) {
        return true

        }function containSpecial (input){
            var regex = /[\s~!@#$%\^&*+=\-\[\]\\;,/{}|\\":<>\?()\._]/g.test(str)
            if (regex).text(input)) {
                return falst
            }else {
                return true;
            }
        }

    }
}

// placeholder = "flavor"console.log(input)
    // if(isNaN(input) || ){
        // show this to the user let them click it
// Morgan's code for autocomplete
        var flavors = [
            "Mint",
            "Chocolate",
            "Vanilla", 
            "Strawberry",
            "Rage",
            "Moose tracks"
          ];
          //case senstive- maybe fix
          function autoComplete(){
            var input = document.getElementById("userInput").value;
            if(isValid(input)){
             flavors.forEach(function (flavor){
              if(flavor.startsWith(input)){
                // show this to the user
                // let them click it
                // fill value in with selected flavor
                 }
             });
              
            } else {
              console.log("invalid input");
              //change to alert once done
            }
          }
          
          function isValid(input){
            var regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d+]/g;
            if(regex.test(input)){
              return false
            } else {
              return true;
            }
          }
          var suggestion = document.getElementById("productName");
          var opt = document.createElement("option")
          var btn =document.createElement("button");
          opt.value= flavor;
          opt.innerHTML = flavor
          suggestions.appendChild(opt);
          document.body.appendChild(opt);
          if (flavor.startsWith(input));
