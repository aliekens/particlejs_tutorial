# Log in to Particle with a form

If your end user is the owner of the Particle credentials, you can use a form and cookies to log in and manage authentication credentials, such as the access token you receive when successfully logging in with the Particle API. This form contains all the elementary tools to build such a solution.

## How to use

* Open the `index.html` file in your browser
* Open the JavaScript console of your browser
* Use the form to log in to your Particle account
* The console reports whether your login was successful or not
* If you logged in successfully, the login form will be hidden
* Your access token and a logout action are shown
* A cookie is dropped (if you run this in a server), the cookie remembers the access token when you return
* Find and copy your authentication token, which you can use in other examples

## More info

This example is a more involved example which can be used as a resource top build your complete application and to securely protect your authentication. In a real world application, the end-user doesn't need to have a Particle account, and we will manage logging in to the device and talking to the Particle API in the backend, for example in the backend processes of a Node JS application.