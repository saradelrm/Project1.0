

class Order { //defining the class orders
    constructor(itemName, itemPrice, itemId, itemQty, userId, userName, orderId, orderTotal) 
    {  
        this.itemName = itemName,
        this.itemPrice = itemPrice,
        this.itemId = itemId,
        this.itemQty = itemQty,
        this.userId =userId,
        this.userName = userName,
        this.orderId = orderId
        this.orderTotal = orderTotal
    }
}

//Check if there is any order in the local storage
var orders = []

if (localStorage.getItem('orders') === null) {
    //In case there is none, set an empty array
    orders = [];
  } else {
    //In case there is ordes, retrieve them
    orders = JSON.parse(localStorage.getItem('orders'));

    //for each order, add a new object to the order class with each of the atributes defined
    for (let i = 0; i < orders.length; i++) {
      orders[i] = new Order(orders[i].itemName, orders[i].itemPrice, orders[i].itemId,
        orders[i].itemQty, orders[i].userId, orders[i].userName, orders[i].orderId, orders[i].orderTotal);
  }
}

//Funtion for adding a new order