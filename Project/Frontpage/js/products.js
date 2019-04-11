let products = []


/**
 * PRODUCTS
 */

// Load the current database of products from localStorage
const loadProducts = () => {
    products = [new Xperience('Enjoy a day at Serenity Spa!','Spa day','The spa\'s facilities include a jacuzzi, a relaxation area, a sauna, an aromatherapy steam room and a pool looking out over the Danish countryside.You can choose a 60-minute treatment from the treatment menu - we like the sound of the Sensory Body Massage with Hot Stones, the Raindrop Massage or the English Rose Radiance Facial. The Serenity Spa Guide praises the venue\'s "countryside views" and "floor-to-ceiling windows" that "fill the pool and Jacuzzi area with natural light" ' 
                , "999 DKK", './Pictures/Exp1.jpg', './Pictures/Rating1.png','expCPH1'),
                new Xperience('Experience Copenhagen the Danish way!', 'Bike tour','Join us on a bike ride through the town and celebrate and experience Danish  bicycles, design, Copenhagen and the Danish way of life. At Cycling Copenhagen we love our city  and we’d love for you to experience it the way the locals do – on a  bike in a wonderful city, which is all about bicycles… It’s as simple as that! Whether you’re looking for the best cocktail in town, the place to shop for clothes from the up and coming Danish designers, or the less touristy modern art shows, we’ll give you our best and personal suggestions of where to go – while biking in the City of Cyclists.'
                , "250 DKK", './Pictures/Exp2.jpg','./Pictures/Rating1.png', 'expCPH2'),
                new Xperience('Brew your own coffee!','Barista day','Experience brewing your own coffee with Danish host Claus in his own home! In the 2 hours, you will have the chance to taste at least 4 cups of coffee prepared in different methods. We will use the method of coffee cupping and you will learn the technique of making your own pour-over coffee. Claus will also talk about the coffee culture in Denmark and, of course,  can give you some personal recommendations on places to go while you are in Copenhagen. You don\'t need to bring anything, we have all the equipment here. Make sure you have a little breakfast before.' 
                , "299 DKK", './Pictures/Exp3.jpg','./Pictures/Rating2.png','expCPH3'),
                new Xperience('Give your nails some love!','Manicure madness','Get a manicure or pedicure from ProfessioNAIL. You\'ll have your choice of a wide variety of OPI colours, so you can go for any colour you like – whether bold and bright or natural and muted, they’ve got you (and your nails) covered. All of ProfessioNAIL\'s products and equipment are of a high standard, with hygiene an absolute priority in everything they do. Offering four options to choose from including a standard manicure or pedicure, gel polish manicure or an option for both a manicure and pedicure - whatever you need, they can help. With 10 stores in Denmark and years of beauty experience, it\'s safe to say that the folks at ProfessioNAIL are pretty good at what they do. Dedicated completely and utterly to aesthetics, they\'re well known as nail specialists, but as well as manicures, pedicures, spas, acrylic nails, gel nails, nail art and gel colours, they also offer waxing and even facials. Whether you\'re looking for a little fingertip beautification on your next shopping trip, or something a little more comprehensive, there\'s a very good chance that ProfessioNAIL can get you sorted - head on in and find out for yourself.'                 
                , "199 DKK", './Pictures/Exp4.jpg','./Pictures/Rating2.png','expOSL1'),
                new Xperience('Mix your own creations!','Cocktail masterclass','Jump into the fascinating world of mixology and create your own products and modern twists on classic cocktails. Study the remarkable history of cocktails and bartending, from the pre-prohibition era to marvellous contemporary cocktails. A big part of the course will focus on making products that form the basis of a lot of incredible cocktails. From simple sugar syrups to very complex grenadines, you’ll cook and cover a bunch of different products that are essential to fantastic cocktail making. You’ll learn advanced garnishing methods to transform your cocktails and make them look at home in any high-end cocktail bar. You’ll make chocolate spoons, sugar discs, dehydrated fruits and more.'
                , "350 DKK", './Pictures/Exp5.jpg','./Pictures/Rating1.png','expOSL2')]
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