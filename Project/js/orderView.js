/**
 * ORDER VIEW
 */
// Create a function that renders the individual order item
const renderOrderElement = (item) => {
    return `
        <tr>
            <td>${item.name}</td>
            <td>${item.price} DKK.</td>
            <td>${item.quantity}</td>
            <td>
                <button class="remove-cart-btn" data-id="${item.id}">Remove</button>
            </td>
        </tr>
    `
}


