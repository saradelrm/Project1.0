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