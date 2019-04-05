

class Xperience {
    constructor(name, price, img_url, details_url, id) {
        this.name = name,
        this.price = price,
        this.img_url = img_url,
        this.details_url = details_url,
        this.id = id
    }

    // Create a method that renders the Gin's HTML structure with dynamic data
    renderHTML() {
       return `<tr>
                    <td>
                        <img src="${this.img_url}" style="height: 125px">
                    </td>
                    <td>${this.name}</td>
                    <td>${this.price}</td>
                    <td>
                        <button class="more-details-btn" onclick="location.href='CPH-exp.html#${this.id}'"; data-id="${this.id}">More details</button>
                    </td>
                </tr>
    `}
}