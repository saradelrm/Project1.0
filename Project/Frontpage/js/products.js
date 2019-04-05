let products = []


/**
 * PRODUCTS
 */

// Load the current database of products from localStorage
const loadProducts = () => {
    products = [new Xperience('Enjoy a day at Serenity Spa!','Spa day','The spa\'s facilities include a jacuzzi, a relaxation area, a sauna, an aromatherapy steam room and a pool looking out over the Danish countryside.You can choose a 60-minute treatment from the treatment menu - we like the sound of the Sensory Body Massage with Hot Stones, the Raindrop Massage or the English Rose Radiance Facial. The Serenity Spa Guide praises the venue\'s "countryside views" and "floor-to-ceiling windows" that "fill the pool and Jacuzzi area with natural light" ' 
    , "999 DKK", './Pictures/Exp1.jpg', './Pictures/Rating1.png','./CPH-exp1.html', 'exp1'),
                new Xperience('Give your nails some love!','Manicure madness','The spa\'s facilities include a jacuzzi, a relaxation area, a sauna, an aromatherapy steam room and a pool looking out over the Danish countryside.You can choose a 60-minute treatment from the treatment menu - we like the sound of the Sensory Body Massage with Hot Stones, the Raindrop Massage or the English Rose Radiance Facial. The Serenity Spa Guide praises the venue\'s "countryside views" and "floor-to-ceiling windows" that "fill the pool and Jacuzzi area with natural light" ' 
                , "199 DKK", './Pictures/Exp2.jpg','./Pictures/Rating2.png','./CPH-exp2.html', 'exp2'),
                new Xperience('Brew your own coffee!','Barista day','Experience brewing your own coffee with Danish host Claus in his own home! In the 2 hours, you will have the chance to taste at least 4 cups of coffee prepared in different methods. We will use the method of coffee cupping and you will learn the technique of making your own pour-over coffee. Claus will also talk about the coffee culture in Denmark and, of course,  can give you some personal recommendations on places to go while you are in Copenhagen. You don\'t need to bring anything, we have all the equipment here. Make sure you have a little breakfast before.                ' 
                , "299 DKK", './Pictures/Exp3.jpg','./Pictures/Rating3.png','./CPH-exp3.html', 'exp3')]
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