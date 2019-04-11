let products = []
const pageUrl = location.href

// we get the capital where we are located from the URL
const capital = pageUrl.substring(pageUrl.indexOf("page/")+5, pageUrl.length - 5 )
console.log(capital)


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
                , "350 DKK", './Pictures/Exp5.jpg','./Pictures/Rating1.png','expOSL2'),
                new Xperience('Rent an exclusive yacht and sail around Oslo!','Private yacht tour','Whether you are a dedicated sailor seeking the freedom of exploring the fjords, a couple longing for relaxation and comfort under the Northern Lights or a group of adventurous travelers wanting to explore the highest tops or deepest waters, you will find Norway’s largest sail charter operator offering all year round life changing experience in Oslo. To get the best experiences you need time to think, enjoy and take in the scenery. With groups of up to only 10 people including crew you get a chance to experience the nature in an intimate and authentic way.'
                , "899 DKK", './Pictures/Exp6.jpg','./Pictures/Rating1.png','expOSL3'),
                new Xperience('Hike in beautiful nature!','Hiking day','Every year we bring fellow explorers out on beautiful hiking trips in Sweden. For us, a portfolio of authentic high-class adventure trips is fundamental. Simply put, our trips are a result of the places we love to visit, and activities that we love doing. On our tours, we combine magnificent nature, authentic local accommodations, famous destinations, and other less known gems in Sweden. Join us this summer for a fantastic hike around one of Norway\'s most beautiful lakes outside of Stockholm. The hike around the Swedish Fjord is a trekking tour in beautiful scenery with magnificent views of the sea and fjord. We will stay in unique and charming accommodations during this Adventure Tour.'
                , "150 DKK", './Pictures/Exp7.jpg','./Pictures/Rating2.png', 'expSTK1'),
                new Xperience('Go back in time at the ABBA Museum!','Museum visit','Abba, the most successful Swedish group of all time, enjoyed a global return to fame with the success of the musical and the film Mamma Mia! In its home country, however, its popularity never dimmed. The museum allows visitors to guest star in an Abba video and marvel at the gloriously over-the-top stage costumes. For hard-core fans, you can also go to the nearby Abba: The Party, where diners are “transported” to a Greek island for a rambunctious evening of food and sing-along entertainment.'
                , "200 DKK", './Pictures/Exp8.jpg','./Pictures/Rating2.png','expSTK2'),
                new Xperience('Discover the Nordic kitchen!','Cooking class','Do you want to learn how Swedish people cook? Then you should try a cooking class, and Stockholm has some good ones to offer. Here you can learn how to cook with Scandinavian ingredients, what New Nordic food or fermentation is. You can also learn how to bake the perfect bread with your own sourdough or how to create the juiciest Swedish meatballs. The owner Mark Jonsson is a double Masterchef winner, cookbook author and tv host, and when he is not the instructor of the cooking class, other passionate cooks, food writers or food enthusiasts are there to give you a good time and pass on their food knowledge to you. Dates are flexible, and if you are looking for a group event, you can also book a private cooking class.'
                , "499 DKK", './Pictures/Exp9.jpg','./Pictures/Rating1.png','expSTK3')]

}

// Create a function to get the products that match the capital where we are located (CPH, OSL, STK) 
// Looping through all the products until it find the ones matching the capital URL above 

function getProducts() {
   
    var productCapital = []
   
   for(i = 0; i < products.length; i++){
    if (products[i].id.includes(capital)){
        productCapital.push(products[i])
        console.log (productCapital)
    }
   }
    
return productCapital
}

function getAllProducts(){
    return products
}

// Load the products
loadProducts()

