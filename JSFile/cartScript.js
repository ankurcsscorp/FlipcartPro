

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
       
    }

    var addToCartButtons = document.getElementsByClassName('cart_class')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    document.getElementById("cart_no").innerHTML = counter*0;
    document.getElementById("cart_no").style.display="none";
 
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
      buttonClicked.parentElement.previousElementSibling.remove()
      buttonClicked.parentElement.parentElement.remove()
      buttonClicked.parentElement.remove()
   
  document.getElementById("cart_no").innerHTML = --counter;
  if(counter==0)
  {
    document.getElementById("cart_no").style.display="none"; 
  }
        updateCartTotal()
    
}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    document.getElementById('checkmark').style.display="block";
    document.getElementsByClassName('container')[0].style.marginTop='17%';
    setTimeout(function(){
        document.getElementById('checkmark').style.display="none";
        document.getElementsByClassName('container')[0].style.marginTop='0%';
    },2000);
    var title = shopItem.getElementsByClassName('imgDynamic')[0].innerText
   
    var price = shopItem.getElementsByClassName('inner_div_price')[0].innerText.split(" → ")[2].split("\n\n")[0]
    var imageSrc = shopItem.getElementsByClassName('imgDynamic')[0].src
    addItemToCart(title, price,imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-price')
   console.log(cartItemNames)
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == price) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number"  min="0" value="1" onchange="updateCartTotal();">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    // updateCartTotal()
}
var total;
function updateCartTotal() {
    
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
     total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0].innerText;
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0].value;
       console.log(priceElement);
       console.log(quantityElement);
       console.log(parseInt(priceElement)*parseInt(quantityElement));

        // var price = parseFloat(priceElement.innerText)
        // var quantity = quantityElement.value
        // total =total+parseInt(price);
        total=total+parseInt(priceElement)*parseInt(quantityElement);
        // console.log(typeof("total "+total));
        // console.log(typeof(price))

        
    }
    // total = Math.round(total * 100) / 100
    // console.log("final "+price)
    document.getElementsByClassName('cart-total-price')[0].innerText = 'RS ' + total
}
