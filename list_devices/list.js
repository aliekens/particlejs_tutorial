var particle = new Particle();
var access_token = "YOUR_ACCESS_TOKEN_HERE"

// when the page is loaded
$(document).ready(function() {
  
  // request the list of our devices
  particle.listDevices({ auth: access_token }).then(
    function(devices){
      
      // show the devices in this list
      devices.body.forEach(function(device) {
          // log to the console
          console.log(device);
          // add a list item to our HTML list
          var html = '<li><strong>'  + device.name + '</strong> id=' + device.id + ' online=' + device.connected + '</li>';
          $('#deviceList').append(html);
      });
      
    },
    function(err) {
      console.log('List devices call failed: ', err);
    }
  );
});