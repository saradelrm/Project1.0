// Create a user class, so we have an easy way to create users and further implement features at a later stage
class User {

  // The constructor for our class, which will allow us to create new objects of our class
    constructor(firstname, lastname, username, email, password) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.username = username;
      this.email = email;
      this.password = password;
      this.logged = 0;
    }
  }
  
  var users;
  
  function userCheck (){
        //Check if there is any user in the local storage
    if (localStorage.getItem('users') === null) {
      //In case there is none, set an empty array
      users = [];
    } else {
      //In case there is users, retrieve them
      users = JSON.parse(localStorage.getItem('users'));

      //for each user, we add a new object to the user class with each of the atributes defined
      for (let i = 0; i < users.length; i++) {
        users[i] = new User(users[i].firstname, users[i].lastname, users[i].username, users[i].email, users[i].password, users[i].logged);
      }
    }
  }
  userCheck()

  // Bind the button to a variable for later use
  var submit = document.getElementById('submit');
  var signUp = document.getElementById('signUp');
  
  // Bind the span for result text for later use
  var resultSpan = document.getElementById('loginResult');
  
  // Bind a counter in order to see if the user has tried to login too many times
  var counter = 3;

  //The Sign up form
  if (signUp) {
    signUp.onclick = function () {
    // Bind the six input fields and get the value
    var inputFirstName = document.getElementById('firstname');
    var inputLastname = document.getElementById('lastname');
    var inputUsername = document.getElementById('username');
    var inputUserEmail = document.getElementById ('email')
    var inputPassword = document.getElementById('password'); 
    var inputTerms = document.getElementById ('terms');
  
  //Check if the user fills in the form 
  if(inputUsername.value.length == 0 || inputFirstName.value.length == 0 || inputLastname.value.length == 0 || inputUserEmail.value.length == 0){
    // Set the resultspan with a new text and return false to get out of this function
    resultSpan.innerText = "You need to enter the information in all the fields market with *";
    return false;
    
    //Check the new user password length
  }   else if (inputPassword.value.length == 0 ||inputPassword.value.length < 8){
        resultSpan.innerText = "Password too short, minimum 8 characters";
        return false ;

    //Check the new user has agreed to terms and conditions
        } else if (inputTerms.checked == false){
            resultSpan.innerText = "You need to agree with our terms and conditions";
            return false;
          }
  
    //checking if the user is already created in local storage
    for (let i = 0; i < users.length; i++) {
      if (users[i].username == inputUsername.value){
      resultSpan.innerText = "This user name is already registered, please choose a different one";
      return false;
    }
  }
    //Add new user object to the class
    users.push(new User(inputFirstName.value, inputLastname.value, inputUsername.value, inputUserEmail.value, inputPassword.value, 0));
    
    //Update the value of users in the local storage
    localStorage.setItem('users', JSON.stringify(users));
    resultSpan.innerText = "You have registered succesfully"
    }
  }
  
  //Log in form
  if (submit) {
    // Bind the onClick-function to our own function
    //everytime we click on the login button we will execute our function
    submit.onclick = function(){
  
      // Bind the two input fields and get the value
      var inputUsername = document.getElementById('username');
      var inputPassword = document.getElementById('password');
  
      // Check if the user has introduced a name or password
      if(inputUsername.value.length == 0 || inputPassword.value.length == 0){
        // In case nor we set the resultspan with a new text and return false to get out of this function
        resultSpan.innerText = "You need to enter a username and password in order to use our system";
        return false;
      }
  
      // Loop through all our users  in our local storage and return true if we find a match
      for(var i = 0; i < users.length; i++) {
  
        // Bind user to a variable for easy use
        var user = users[i];

        // If username and password introduced through the form matches any one of the users we have stored
        if(user.username == inputUsername.value && user.password == inputPassword.value) {

          users[i].logged = 1;
         //updating the logged variable in local storage for this particular user
          localStorage.setItem('users', JSON.stringify(users));
  
          // Redirect to Purchase site, since the credentials are the correct ones
          function goPurchase(){
            window.location.href="./purchase.html"
          }
          goPurchase();         
        }
      }
  
      // Check if the user has tried to enter a wrong username and password too many times
      if(counter == 0){
        // Since the user has tried three times, we let the user know that he's been banned
        resultSpan.innerText = "You've entered the wrong username and password three times. You've been banned from our system";
  
        // Disable the two input fields and submit button in order for the user to not break in
        inputUsername.disabled = true;
        inputPassword.disabled = true;
        submit.disabled = true;
  
        // Return false to stop us from doing anything further.
        return false;
  
      }else {
        // Since there is not a match, the user must have typed a wrong password and/or username
        resultSpan.innerText = "You've entered a username or password that does not match our stored credentials";
  
        // Update the counter with an attempt of logging in
        counter--;
  
        // Return false, since we do not have anything more to do, to stop the function
        return false;
      }
    };  
  }
  