# Log in to Particle (insecurely)

This is the most basic HTML example to get the Particle API to work and allows you to get an access token that authenticates you to use the remainder of the Particle Javascript library.

## How to use

* Change the username and password in [index.html](index.html) file to your own
* Open the `index.html` file in your browser
* Open the JavaScript console of your browser
* The console should report a successful login to the Particle API, or report an error
* Find and copy your authentication token, which you can use in other examples

## A note on security

This example is DEFINITELY NOT DONE in real life situations. You will never put secret credentials such as passwords in HTML as people visiting your web site have full access to your Particle account. If your end user is the one with the Particle credentials, you can ask for them in a [form](../login_with_form). If your user doesn't have the Particle credentials, you at least need a minimal backend that can secretly store your credentials and perform all communication with Particle securely without splling authentication details to users.