/**
 * SHOP VIEW
 */

// generateShopDOM is a function that generates the DOM (Shop) structure

const generateShopDOM = () => {
    const productCatalog = document.getElementById('xperience-catalog') //the variable productCatalog will get elements 
    //from the list of xperiences we have in products.js
    const products = getProducts() //Here we get only the products that belong to the city we have selected
    var html = ''

    products.forEach((item) => {
        html += item.renderHTML() //for each product this line will generate an HTML page
    })

    productCatalog.innerHTML = html //Required to change the HTML in each product page
}

// Invoke the generateShopDOM() function to render the DOM
generateShopDOM()

