
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
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
    var cartRows = cartRows[i];
    var priceElement = cartRows.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRows.getElementsByClassName('cart-quantity-input')[0];
    var price = parseFloat(priceElement.innerHTML.replace('$',''));
    var quantity= quantityElement.value;
    total = total + (priceElement * quantityElement);
    
}
document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total;
}
console.log(priceElement * quantityElement)
// the array will log into console
var itemsOrdered =['Big Salad', 'Small Salad', 'Hamburger Combo', 'Cheeseburger Combo', 'Large Drink', 'Small Drink', 'Chocolate Milkshake']

//    button.addEventListener('click', function() {
//        console.log('clicked');
//    })
console.log("here!")
