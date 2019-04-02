/**
 * SHOP VIEW
 */
// Create a function that generates the DOM (Shop) structure
const generateShopDOM = () => {
    const productCatalog = document.getElementById('xperience-catalog')
    const products = getProducts()
    var html = ''

    // for (let i = 0; i < products.length; i++) {
    //     html += products[i].renderHTML()
    // }

    products.forEach((item) => {
        html += item.renderHTML()
    })

    productCatalog.innerHTML = html
}
