
// document.addEventListener("click", addToCart);
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}
function updateCartTotal() {
    var cartItemContainer=document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++) {
    var cartRows = cartRows[i]
    var priceElement = cartRows.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRows.getElementsByClassName('cart-quantity-input')[0]
    var price = parseFloat(priceElement.innerText.replace('$',''))
    console.log(price)
}
}

// the array will log into console
var itemsOrdered =['Big Salad', 'Small Salad', 'Hamburger Combo', 'Cheeseburger Combo', 'Large Drink', 'Small Drink', 'Chocolate Milkshake']

//    button.addEventListener('click', function() {
//        console.log('clicked');
//    })
console.log("here!")
