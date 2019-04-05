const id = location.hash.substring(1)
const experiences = getProducts()

console.log(id)
console.log(experiences)

const experience = experiences.find(function (experience) {
    return experience.id === id
}) 

console.log(experience.name)

document.getElementById("exp-title").innerText = experience.name
document.getElementById("exp-img").src = experience.img_url// experience.img

//const product = data.find((product) => {
//    return product.id === id
//})

