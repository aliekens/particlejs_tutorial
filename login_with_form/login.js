var particle = new Particle();
var accesstoken;

// when the page is loaded
$(document).ready(function() {
  
  // run the login handler when the button is clicked
  $('#loginButton').on('click', loginButtonHandler);
  $('#logoutButton').on('click', logoutButtonHandler);
  
  // see if we already have an access token
  accessToken = Cookies.get('accessToken'); 
  if (accessToken == undefined || accessToken == '') {
    // Show the login page
    $('#loginDiv').show();
  } else {
    // We have an access token, so show the main page. Note that the access token
    // may be expired, but we'll only find that out the first time we try to use it.
    $('#logoutDiv').show();
    $('#mainDiv').show();
  }
  
});

// when the log in button is clicked
function loginButtonHandler(event) {
  
  // prevent the button from running its default behavior
  event.preventDefault();

  // get the username and password from the form
  var username = $('#loginUser').val();
  var password = $('#loginPass').val();
  
  // login with these details
  particle.login({username: username, password: password}).then(
    function(data){
      access_token = data.body.access_token;
      console.log('Log in successfull, token = ', access_token);
      
      // drop a cookie with the access token that expires in 7 days
      Cookies.set('accessToken', accessToken, { expires: 7 });
      
      // hide the login div and show the main div
      $('#loginDiv').hide();
      $('#mainDiv').show();
      
      // show the access token
      $('#accessToken').html( access_token );
    },
    function(err) {
      console.log('Log in failed, error = ', err);
    }
  );
  
}

function logoutButtonHandler(event) {
  // prevent the button from running its default behavior
  event.preventDefault();

  accessToken = '';
  Cookies.remove('accessToken');	
  
  $('#mainDiv').hide();
  $('#loginDiv').show();
}
