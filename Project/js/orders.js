
class Order { //defining the class orders
    constructor(itemName, itemPrice, itemId, itemQty, userId, userName, orderId, orderTotal) 
    {  
        this.itemName = itemName,
        this.itemPrice = itemPrice,
        this.itemId = itemId,
        this.itemQty = itemQty,
        this.userId =userId,
        this.userName = userName,
        this.orderId = orderId,
        this.orderTotal = orderTotal
    }
}

//Check if there is any order in the local storage
let orders = []

