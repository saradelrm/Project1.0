console.log('cartview')

/**
 * CART VIEW
 */
// Create a function that renders the individual cart item
const renderCartElement = (item) => {
    return `
        <tr>
            <td>${item.name}</td>
            <td>${item.price} DKK.</td>
            <td>${item.quantity}</td>
            <td>
                <button class="remove-cart-btn" data-id="${item.id}">Remove</button>
            </td>
        </tr>
    `
}

// Create a function that generates the DOM (Cart) structure
const generateCartDOM = () => {
    const shoppingCart = document.getElementById('cart-content')
    const cart = getCart()

    let html = ''

    if (cart.length === 0) {
        html = '<h3>No items in shopping cart!</h3>'
    } else {
        cart.forEach((item) => {
            html += renderCartElement(item)
        })
    }

    html += `<tr><td>Total:</td><td id="total">${calculteTotal().toFixed(2)} DKK.</td></tr>`

    shoppingCart.innerHTML = html
    addRemoveButton()
}


function addRemoveButton() {
    //Add an event listener for the remove button
    const buttons = document.getElementsByClassName('remove-cart-btn')
    console.log(buttons.length)
    
    for (let i = 0; i < buttons.length; i++) {
        console.log(buttons[i])
    }
    
    
    for (let i = 0; i < buttons.length; i++) {
        console.log('loop')
        buttons[i].addEventListener('click', (event) => {
            console.log('clicked')
            removeFromCart(buttons[i].dataset.id, i)
        })
    }
}

