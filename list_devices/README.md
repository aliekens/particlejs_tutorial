# List your Particle devices

When you have access to your Particle account, you can use your access token to list all the devices that are connected to your account. The IDs of these devices can be used to start communicating with your devices, call functions and track variables on the devices.

## How to use

* Change the access token in `list.js` to the one you acquired by logging in
* Open the `index.html` file in your browser
* Open the JavaScript console of your browser
* The console reports details of your device(s)
* The web site shows a list of your devices, their IDs and whether they are online
* Find and copy your device ID, which you can use in other examples

## A note on security

Again, the use of an access token in our HTML is NOT DONE in a real application. Using login forms to get the access token or handling the authentication and these requests in the backend would be used.