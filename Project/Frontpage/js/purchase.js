
//Function for calculating the total of the shopping cart
function cartTotal(){   // function for calculating total items in basket 
    let basket = []
    let total = 0
    basket = JSON.parse(localStorage.getItem('cart'))   // gets value from local storage
    basket.forEach((basket) => {                        // for each element in the basket
    total += basket.quantity                            // gets the quantity and adds to the total amount
     })
    return total.toString()                             // returns total in string form
}

const getItem = document.getElementsByClassName('add-cart-btn')

for (let i = 0; i < getItem.length; i++) {
    getItem[i].addEventListener('click', (event) => {
        cartTotal()
    })
}