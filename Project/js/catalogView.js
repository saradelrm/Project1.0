/**
 * SHOP VIEW
 */
//this file is for each city page because it sends data to the experience-catalog id from html
// generateShopDOM is a function that generates the DOM (Shop) structure

const generateShopDOM = () => {
    const productCatalog = document.getElementById('xperience-catalog') //get the location where we will place the products in the html 
    //the variable productCatalog will get elements from the list of xperiences we have in products.js
    const products = getProducts() //Here we get only the products that belong to the city we selected by using the hash
    var html = ''

    products.forEach((item) => {
        html += item.renderHTML() //for each product this line will generate an HTML page with the render function which is in experience.js
    })

    productCatalog.innerHTML = html //Required to change the HTML in each product page
}

// Invoke the generateShopDOM() function to render the DOM
generateShopDOM()

