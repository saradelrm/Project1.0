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


const homeB = document.getElementsByClassName('home-btn')

//Event listener, once the user clicks for returning home after purchase
//the local storage of the cart clears up

for (let i = 0; i < homeB.length; i++) {
    homeB[i].addEventListener('click', (event) => {
        localStorage.setItem('cart', JSON.stringify([]))
    })
}
