//update quantity
function updateQuantity(displayQuantity) {
    let quantity = document.querySelector('.total-quantity')
    quantity.innerHTML = displayQuantity
}

//quantity starts at 1 in shopping cart
let quantity = 1

//buttons
const quantDown = document.querySelector('#quantity-down')
const quantUp = document.querySelector('#quantity-up')

//add event listener to decrease quantity
quantDown.addEventListener('click', function(e) {
    if (quantity > 0) {
        quantity--
    }
    updateQuantity(`Quantity: ${quantity}`)
})


//add event listener to increase quantity
quantUp.addEventListener('click', function() {
    quantity++
    updateQuantity(`Quantity: ${quantity}`)
})