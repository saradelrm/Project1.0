
class Order { //defining the class orders
    constructor(itemName, itemPrice, itemId, itemQty, userId, userName, orderId, orderTotal, orderDate) 
    {  
        this.itemName = itemName,
        this.itemPrice = itemPrice,
        this.itemId = itemId,
        this.itemQty = itemQty,
        this.userId = userId,
        this.userName = userName,
        this.orderId = orderId,
        this.orderTotal = orderTotal
        this.orderDate = orderDate
    }
}

//Check if there is any order in the local storage
let orders
let currentCart = []
let currentUser = []

//We calculate the current date so we can add it to the order
var currentDay = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (dd+sp+mm+sp+yyyy);
}


function loadOrders (){
    if (localStorage.getItem('order') === null) {
        //In case there is none, set an empty array
        orders = [];
} else {
    orders = JSON.parse(localStorage.getItem ('order'));

    //for each order, add a new object to the user class with each of the atributes defined
        for (let i = 0; i < orders.length; i++) {
        orders[i] = new Order(orders[i].itemName, orders[i].itemPrice, orders[i].itemId, orders[i].itemQty, 
            orders[i].userId, orders[i].userName, orders[i].orderId, orders[i].orderTotal, orders[i].orderDate);
        }
    }
}

loadOrders()

function userOrder (){
    
    currentUser = JSON.parse(localStorage.getItem('users'));
    currentCart = JSON.parse(localStorage.getItem('cart'));

    
    for(let i = 0; i < currentUser.length; i++) {
        // check whoch user is logged in
        if(currentUser[i].logged == 1 ) {
            for(let x = 0 ; x < currentCart.length; x++){

                //Calculate the total of the line
                let qty = currentCart[x].price * currentCart[x].quantity;
                
                //Calculate a random Id
                let newId = currentDay('')+Math.floor(Math.random() * 101);
                  
                    orders.push(new Order(currentCart[x].name, currentCart[x].price, currentCart[x].id, currentCart[x].quantity, 
                        currentUser[i].email, currentUser[i].firstname+' ' + currentUser[i].lastname, newId.toString(), qty, currentDay('/')));
                //Update the value of orders in the local storage
                localStorage.setItem('order', JSON.stringify(orders));
                
            }     
           
        }    
          
    }
          
}
userOrder ()

//Retrieve the orders from the user that has logged in the system
function getCurrentOrders (){
    currentUser = JSON.parse(localStorage.getItem('users'));
    let currentOrders = []

    let currentUserId 
    //compare and obtain the user that is logged in 
    for(let i = 0; i < currentUser.length; i++){
        if(currentUser[i].logged == 1 ){
            currentUserId = currentUser[i].email
        }
    }
    orders = JSON.parse(localStorage.getItem ('order'));
    
    for (let x = 0; x < orders.length; x++){  
        if (currentUserId == orders[x].userId){
            currentOrders.push(orders[x]) 
        }
  
    }
    //return only the orders that have been placed by the logged in user
    return currentOrders
}

getCurrentOrders()

/**
 * ORDER VIEW
 */
// Create a function that renders the individual order item
const renderOrderElement = (item) => {
    return `
            <tr>
                <td>${item.orderId}</td>
                <td>${item.orderDate}</td>
                <td>${item.userName}</td>
                <td>${item.itemName}</td>
                <td>${item.itemQty}</td>
                <td>${item.itemPrice} DKK.</td>
                <td>${item.orderTotal} DKK.</td>
            </tr>
        <br>
    `
}

// Create a function that generates the DOM (Orders) structure
const generateOrderDOM = () => {
    const orderLine = document.getElementById('order-content')
    const currentOrder = getCurrentOrders()

    let html = ''

    if (currentOrder.length === 0) { //checking if the length of the array is 0 or not and displaying a message
        html = '<h3>Oh no, your order is empty!</h3>' 
    } else {
        currentOrder.forEach((item) => { //in case the cart is not empty the code will render the elements of the cart 
            html += renderOrderElement(item)
        })
    }

    orderLine.innerHTML = html
}

generateOrderDOM()


      

