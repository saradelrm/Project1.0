let products = []


/**
 * PRODUCTS
 */

// Load the current database of products from localStorage
const loadProducts = () => {
    products = [new Xperience('Flor De Sevilla', 216.66, './Pictures/CPH2.jpg', '98336088-aa0f-4147-804a-bce1dce2d36e'),
                new Xperience('Rangpur', 225.33, './Pictures/CPH.jpg', '7aae3eb0-6611-4259-ab8f-4fae4a5d1bbe')]
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
