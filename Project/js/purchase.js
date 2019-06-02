let totalAmount = 0

//Function for calculating the total of the shopping cart
function cartTotal(){   // function for calculating total items in basket 
    let basket
    let total = 0
    //If there is not cart yet we will return 0
    if (JSON.parse(localStorage.getItem('cart')) === null ){
         return   total.toString() //because that's how we show it in html, this is for the small cart on top of the page

        } else{ //calculate the total of elements for the small cart on the page
                basket = JSON.parse(localStorage.getItem('cart'))
               
                basket.forEach((basket) => {                        // for each element in the basket
                total += basket.quantity                            // gets the quantity and adds to the total amount
                })
                return total.toString()                             // returns total in string form
            }
}
totalAmount = cartTotal()

const homeB = document.getElementsByClassName('home-btn')//link it to purchase html

//Event listener, once the user clicks for returning home after purchase
//the local storage of the cart clears up and the user log flag goes back to 0
for (let i = 0; i < homeB.length; i++) {
    homeB[i].addEventListener('click', (event) => {
        localStorage.setItem('cart', JSON.stringify([]))
        //Check the users in the local storage
        userCheck()
        //Clear the logged flag
        localStorage.setItem('users', JSON.stringify(users));
        
    })
}