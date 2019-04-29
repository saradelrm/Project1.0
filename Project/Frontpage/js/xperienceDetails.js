const id = location.hash.substring(1)
const experiences = getAllProducts()

console.log(id)
console.log(experiences)

const experience = experiences.find(function (experience) {
    return experience.id === id
}) 

console.log(experience.name)

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

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
        let quantity = buttons[i].previousElementSibling.value
        addToCart(experience.id, Number(quantity))
    })
}




