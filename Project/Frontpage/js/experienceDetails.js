const id = location.hash.substring(1)
const experiences = getProducts()

console.log(id)
console.log(experiences)

const experience = experiences.find(function (experience) {
    return experience.id === id
}) 

console.log(experience.name)

document.getElementById("exp-name").innerText = experience.name
document.getElementById("exp-title").innerText = experience.title
document.getElementById("exp-description").innerText = experience.description
document.getElementById("exp-price").innerText = experience.price
document.getElementById("exp-rating").src = experience.rating
document.getElementById("exp-img").src = experience.img_url // experience.img

//const product = data.find((product) => {
//    return product.id === id
//})

