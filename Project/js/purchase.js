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
let totalAmount = cartTotal()


function clearUserCart (){
    localStorage.setItem('cart', JSON.stringify([]))
}

const homeB = document.getElementsByClassName('home-btn')

//on the click of the button the variable quantity will invoke the function addToCart
for (let i = 0; i < homeB.length; i++) {
    homeB[i].addEventListener('click', clearUserCart() )
}

