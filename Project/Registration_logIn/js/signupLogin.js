// We create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

  // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname, lastname, username, email, password) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
      this.email = email;
      this.password = password;
    }
  }
  
  var users;
  
  if (localStorage.getItem('users') === null) {
    users = [];
  } else {
    users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++) {
      users[i] = new User(users[i].firstname, users[i].lastname, users[i].username, users[i].email, users[i].password);
    }
  }
  
  // Bind the button to a variable for later use
  var submit = document.getElementById('submit');
  var signUp = document.getElementById('signUp');
  
  // Bind the span for result text for later use
  var resultSpan = document.getElementById('loginResult');
  
  // Bind a counter in order to see if the user has tried to login too many times
  var counter = 3;

  //This is the Sign up form
  if (signUp) {
    signUp.onclick = function () {
    // Bind the two input fields and get the value
    var inputFirstName = document.getElementById('firstname');
    var inputLastname = document.getElementById('lastname');
    var inputUsername = document.getElementById('username');
    var inputUserEmail = document.getElementById ('email')
    var inputPassword = document.getElementById('password'); 
    var inputTerms = document.getElementById ('terms');
  
  if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
    // We set the resultspan with a new text and return false to get out of this function
    resultSpan.innerText = "You need to enter a username and password in order to use our system";
    return false;
    //We make sure that the new user has agreed to terms and conditions
  } else if (inputTerms.checked == false){
    resultSpan.innerText = "You need to agree on terms and conditions";
    return false;
  }
  
  // TODO check if username is already registered 
    users.push(new User(inputFirstName.value, inputLastname.value, inputUsername.value, inputUserEmail.value, inputPassword.value));
    localStorage.setItem('users', JSON.stringify(users));
    resultSpan.innerText = "You have registered succesfully"
    }
  }
  
  if (submit) {
    // Bind the onClick-function to our own function
    submit.onclick = function(){
  
      // Bind the two input fields and get the value
      var inputUsername = document.getElementById('username');
      var inputPassword = document.getElementById('password');
  
      if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
        // We set the resultspan with a new text and return false to get out of this function
        resultSpan.innerText = "You need to enter a username and password in order to use our system";
        return false;
      }
  
      // We loop through all our users and return true if we find a match
      for(var i = 0; i < users.length; i++) {
  
        // Bind user to a variable for easy use
        var user = users[i];

        // If username and password we have in put matches the one in our loop
        if(user.username == inputUsername.value && user.password == inputPassword.value) {
  
          localStorage.setItem('users', JSON.stringify(users));
  
          // We set the resultspan with a new text and return true to get out of this function.
          resultSpan.innerText = "Hi " + user.firstname + " " + user.lastname + ", you've successfully entered the system";
          window.location.replace("../Frontpage/purchase.html");
        
          // We show the user that is actually in the session
          loginUser.innerText = "Hi " + user.firstname;
          // Return true to jump out of the function, since we now have all we need.
          return true;
        }
      }
  
      // We check if the user has tried to enter a wrong username and password too many times
      if(counter == 0){
        // Since the user has tried three times, we let the user know that he's been banned
        resultSpan.innerText = "You've entered the wrong username and password three times. You've been banned from our system";
  
        // Disable the two input fields and the button in order for the user to not make any trouble
        inputUsername.disabled = true;
        inputPassword.disabled = true;
        submit.disabled = true;
  
        // Return false to stop us from doing anything further.
        return false;
  
      }else {
        // Since we did not find a match, we know that the user has typed a wrong password and username
        resultSpan.innerText = "You've entered a username or password that does not match our stored credentials";
  
        // Update the counter with an attempt of logging in.
        counter--;
  
        // Return false, since we do not have anything more to do
        return false;
      }
    };  
  }
  