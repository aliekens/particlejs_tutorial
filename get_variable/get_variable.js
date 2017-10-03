var particle = new Particle();
var access_token = "YOUR_ACCESS_TOKEN_HERE"
var device_id = "YOUR_DEVICE_ID_HERE"

// when the page is loaded
$(document).ready(function() {
  getAnalogValue();
});

function getAnalogValue() {
  particle.getVariable({ deviceId: device_id, auth: access_token, name: 'analogvalue' }).then(function(data) {
    console.log('Device variable retrieved successfully:', data);
    $('#analogvalue').html( data.body.result );
  }, function(err) {
    console.log('An error occurred while getting attrs:', err);
  });
  
  // run the function again after 5 seconds
  setTimeout( getAnalogValue, 5000 );
}
