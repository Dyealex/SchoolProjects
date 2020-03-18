// I am leaving all the commented out items here because this is an example of how frigging hard I worked to get this crap TO WORK!!!!! We are talking "DAYS" here not hours!!!!!! and as of 4:40AM on Wednesday, March 18th, it is still not right!!!!

 var itemsOrdered = []
 var item1 ={name:'Big Salad', cost: 10, ordered:0};
 var item2= {name:'Small Salad', cost: 9, ordered:0};
 var item3= {name: 'Hamburger Combo', cost:8, ordered:0};
 var item4 ={name:'Cheeseburger Combo', cost:9, ordered:0};
 var item5= {name:'Large Drink', cost:3, ordered:0};
 var item6= {name:'Small Drink', cost:2, ordered:0};
 var item7= {name:'Chocolate Milkshake', cost:4, ordered:0};
 
function calculatePrice () {
      console.log("calculatePrice clicked!!!!");
         // console.log("type", typeof calculatePrice());
         // ^^^^oh that was bad news!!!!
         // This works...returns calculate price in console...
         // going back and commenting out all lines and uncommenting one by one....again!
   
   var inputElement= document.getElementById("item1Quantity");
          // console.log("type", typeof "item1Quantity")string
         // console.log(inputElement);
         // This works...returns calcPrice and<input id="item1Quantity" type="text" value="0"> and also returns "undefined" in the console if I just type it in..

   console.log("type", typeof inputElement)
         //^^^This works...returns calcPrice and<input id="item1Quantity" type="text" value="0" and type string...>
  
   var inputText = inputElement.value;
         //This line defines inputText on next line^^^this shit will drive you stark raving mad. This would not work because i hit 'enter' on the value and it had a capitol v instead of lower case!!!!

   console.log("inputText", inputText);
         // console.log("type", typeof inputText)
         //^^^This works...returns calcPrice and<input id="item1Quantity" type="text" value="0" and type string, plus input text 0 or what is typed in box...>
   
         // var quantity = parseInt(inputText);
   console.log("type", typeof inputText)
   console.log("type", typeof quantity);
         // console.log("type", typeof quantity);
         // ^^^works to here...returns calcPrice and<input id="item1Quantity" type="text" value="0" and type string, plus input text 0 or what is typed in box and if text is in the box it returns NaN so parseInt works....>
  
         // console.log("type", typeOf quantity);
         // ^^^uncommenting this line causes error onclick in html calculatePrice nad that typeOf is not defined but returns all of the information above as well...WHY??? WHY>>>because it had a capitol O instead of a lower case o in typeof....LORD HELP ME!!!!! Found the error by copy/paste underneath the working line....
}



// *******   ignore all of this stuff   ****************



//  itemsOrdered.push(item1, item2, item3, item4, item5, item6, item7)
//  for (var i = 0; i < itemsOrdered.length; i++) {
//      console.log(itemsOrdered[i]);
//  }
 // console.log(itemsOrdered)
// var cart =[];

// addItemsToCart(name, price, count)
// function addItemsToCart (){
//     var 
// }



// removeItemsFromCart(name)

// removeItemsFromCartAll(removes all items from cart)

// clearCart()

//countCart()-returns total count

//cartTotal()-return total cost