const idCapital = location.hash.substring(1)
console.log(idCapital)


// Create a function to get the products that match the capital where we are located (CPH, OSL, STK) 
// Looping through all the products until it find the ones matching the capital URL above 
function getProducts() {
   
    var productCapital = []
   
   for(i = 0; i < products.length; i++){
    if (products[i].id.includes(idCapital)){
        productCapital.push(products[i])
        console.log (productCapital)
    }
   }
    
return productCapital
}

class Xperience {
    constructor(title, name, description, price, img_url, rating, id) {
        this.title = title,
        this.name = name,
        this.description = description,
        this.price = price,
        this.img_url = img_url,
        this.rating = rating,
        this.id = id
    }

// Create a method that renders the xperience's HTML structure with dynamic data
    renderHTML() {
       return `<tr>
                    <td>
                        <img src="${this.img_url}" style="height: 125px">
                    </td>
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>
                        <button class="more-details-btn" onclick="location.href='xperienceDetails.html#${this.id}'"; 
                        data-id="${this.id}">More details</button>
                    </td>
                </tr>`
                }
}