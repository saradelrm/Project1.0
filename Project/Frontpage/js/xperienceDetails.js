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
