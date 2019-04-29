//the variable idCapital gets the hash of the link 
const id = location.hash.substring(1)
//the variable experience get the products returned by the function getAllProducts
const experiences = getAllProducts()

//console.log(id)
//console.log(experiences)

const experience = experiences.find(function (experience) { //running the find function for experiences
}) 

//console.log(experience.name)

//associating each experience ....?(not sure with what)
document.getElementById("xp-name").innerText = experience.name
document.getElementById("xp-title").innerText = experience.title
document.getElementById("xp-description").innerText = experience.description
document.getElementById("xp-price").innerText = experience.price
document.getElementById("xp-rating").src = experience.rating
document.getElementById("xp-img").src = experience.img_url // experience.img
document.getElementById("xp-review").innerText = experience.review


// Add an EventListener to every add-to-cart button in the shop and link it
// to the addToCart(itemID, quantity)
const buttons = document.getElementsByClassName('add-cart-btn')

//console.log(buttons);

//on the click of the button the variable quantity will invoke the function addToCart
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let quantity = buttons[i].previousElementSibling.value
        addToCart(experience.id, Number(quantity), experience.name)
    })
}




