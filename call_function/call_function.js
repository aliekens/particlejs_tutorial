var particle = new Particle();
var access_token = "YOUR_ACCESS_TOKEN_HERE"
var device_id = "YOUR_DEVICE_ID_HERE"

// when the page is loaded
$(document).ready(function() {
  $('#onButton').on('click', onButtonHandler);
});

// when the on button is clicked
function onButtonHandler(event) {
  // prevent the button from running its default behavior
  event.preventDefault();
  // call the Particle function on the device
  particle.callFunction({ deviceId: device_id, auth: access_token, name: 'on', argument: '' }).then(
    function(data) {
      console.log('Function called successfully:', data);
    }, function(err) {
      console.log('An error occurred:', err);
    });
}
