let products = []


/**
 * PRODUCTS
 */

// Load the current database of products from localStorage
const loadProducts = () => {
    products = [new Xperience('Xperience1', 216.66, './Pictures/CPH2.jpg','./CPH-exp1.html', '98336088-aa0f-4147-804a-bce1dce2d36e'),
                new Xperience('Xperience2', 225.33, './Pictures/CPH.jpg', './CPH-exp2.html', '7aae3eb0-6611-4259-ab8f-4fae4a5d1bbe'),
                new Xperience('Xperience3', 225.33, './Pictures/CPH.jpg', './CPH-exp3.html', '7aae3eb0-6611-4259-ab8f-4fae4a5d1bbe')]
}

// Create a function to get the most recent list of products
function getProducts() {
    return products
}

// Load the products
loadProducts()

// Create a function to find a product/item based on it's ID
// The function should take both the array and ID as inputs
const findProductById = (data, id) => {
    const product = data.find((product) => {
            return product.id === id
    })

    return product
}

/**
 * SHOPPING CART
 */

// Create a function that adds a product by it's ID and its quantity to the shopping cart
const addToCart = (id, quant) => {
    console.log(`${id} has ben added ${quant} times`);
    if (!findProductById(cart, id)) {
            cart.push({...findProductById(products, id), quantity: quant})
    } else {
            findProductById(cart, id).quantity += quant
    }
    saveCart()
}


// Create a function that loads the cart from localStorage
const loadCart = function() {
    if (localStorage.getItem('cart') === null) {
            cart = []
    } else {
            cart = JSON.parse(localStorage.getItem('cart'))
    }

    // localStorage.getItem('cart') === null ? cart = [] : cart [] = JSON.parse(localStorage.getItem('cart'))
}

// Create a function that saves your cart to localStorage
const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart))
}

// Create a function that returns the current shopping cart
const getCart = () => {
    return cart
}


// Create a function that calcualtes the total price of the cart
const calculteTotal = () => {
    let total = 0

    cart.forEach((item) => {
            total += item.price * item.quantity
    })

    return total
}


// Make sure to load the cart array
loadCart()