

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
    // This works...
   var inputElement= document.getElementById("item1Quantity");
   console.log(inputElement);
//    This works...
//    console.log("type", typeof "item1Quantity")
   var inputText = inputElement.value;
//    this shit will drive you stark raving mad. This would not work because i hit 'enter' on the value and it had a capitol v instead of lower case!!!!
   console.log("inputText", inputText)
//    console.log("inputText", inputText)
//    console.log("type", typeOf, inputText)
}
// works!!! *** works again!!!

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