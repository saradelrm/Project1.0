/**
 * This is the main function file for our registration page.
 * It collects all the user data from the form and creates
 * a new instance of the User class and adds it to the DB.
 * @Marten
 */

// Because I will have to perform multiple actions with the various
// elements of our HTML form, I create a binding for each input element
// so I will not have to use the 'document' object each time
const firstNameUI = document.getElementById('first-name')
const lastNameUI = document.getElementById('last-name')
const usernameUI = document.getElementById('username') 
const passwordUI = document.getElementById('password')
const emailUI = document.getElementById('email')
const checkboxUI = document.getElementById('terms')
const submitBtnUI = document.getElementById('signUp-btn')


// To respond to the users click, I make use of the onclick property
// of the submit button and attach a function to it
submitBtnUI.onclick = function () {

    console.log('clicked')
    console.log(users)

    if(firstNameUI.value.length == 0){
        //document.getelementById('resultspan').innerHTML = Please provide user and password
        lastNameUI.value=""
        return false
    }

     if(passwordUI.value.length < 8){
         document.getElementById('resultSpan').innerText= "Password to short, please have at least 8 characters"
        return false
    }

    // If the user has agreed to the terms and conditions,
    // I create a new user object from his input
    if(checkboxUI.checked) {
        var firstName = firstNameUI.value
        var lastName = lastNameUI.value
        var username = usernameUI.value
        var password = passwordUI.value
        var email = emailUI.value
        for(var i= 0; i<users.length; i++){
            //if usernameUI.value == users[i].username{
                //update the span to let the user know that he has t choose a different
                //return false
            }
        }

        users.push(new User(firstName, lastName, username, password, email))     // To store the user I add him to the array of users (DB)
        
        
        //getElementById() returns an Element object representing
        //the element whose id property matches the specified string
        var x = document.getElementById("msg");
        x.className = "show";                    //The className property sets or returns the class name of an element (the value of an element's class attribute)
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000); //Replace de class name for "" after 3 seconds (3000 milliseconds)
                                                                                        //this meas we will only see the mesage box for 3s    
        //Check the users we have 
        console.log(users)
        //Redirect user to login
        setTimeout(function(){window.location.assign('./cong.html')},10000)   
        // Display message
            
}