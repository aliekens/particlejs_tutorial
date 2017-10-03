# Track the analog value of a photoresistor

We'll build a simple web interface to track the value of a sensor (photoresistor) over the internet

## How to use

* Build the photoresistor example from the Particle Photon kit
  * A photoresistor between A0 (analog input) and A5 (+3.3V)
  * A resistor between A0 (analog input) and GND (0V)
* Flash the [Particle source code](internet_photoresistor.ino) to your device
* Use the [Particle console](https://console.particle.io) to check whether the analog value of the photoresistor is exposed
* Change the access token in `get_variable.js` to the one you acquired by logging in
* Change the device id in `get_variable.js` to the ID of your device
* Open the `index.html` file in your browser
* Open the JavaScript console of your browser
* Every 5 seconds, we check the `analogvalue` variable that is exposed from the device and show the value on the web page
