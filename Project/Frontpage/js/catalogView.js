/**
 * SHOP VIEW
 */
// Create a function that generates the DOM (Shop) structure

const generateShopDOM = () => {
    const productCatalog = document.getElementById('xperience-catalog')
    const products = getProducts() //Here we get only the products that belong to the city we have selected
    var html = ''

    products.forEach((item) => {
        html += item.renderHTML()
    })

    productCatalog.innerHTML = html
}

// Invoke the generateShopDOM() to render the DOM
generateShopDOM()

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

    //html += `<tr><td>Total:</td><td id="total">${calculteTotal().toFixed(2)} DKK.</td></tr>`

    shoppingCart.innerHTML = html
}