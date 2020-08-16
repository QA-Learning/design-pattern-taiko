# design-pattern-taiko

## Requirements
* node (version > 10 ) on your machine and should be set to PATH 
* npm
* docker
* Code Editor: visual studio code

## Install Dependencies
`npm install`

## Bring up the wordpress app in local
`docker-compose -f docker-compose.yaml up`


## Set up Wordpress app
* Open http://localhost:8000 in browser
* Get started with the setup
* Fill neccessary information to set up user name and password
* Click on Install Wordpress

## Run first test
* Update username and password in login.spec.js
* Run `npm test` in another terminal

**Congratulations!!! You have successfully run your first test.**

## Enable WP REST API for API Testing

* Login to the Wordpress using the above credentails

### Install WP REST API Controller Plugin
* Navigate to Plugins on side navigation bar
* Click on `Add New`
* Install and Activate `WP REST API Controller` Plugin

### Update Permalink Settings
* Click on Settings on side Navigation Bar
* Select Permalick
* Select `Post name`
* Save the Changes

### Test the API
* Open Postman
* Send the `GET` request with `http://localhost:8000/wp-json/wp/v2/users` 
* Verify the output

## Set Up Authorization for POST API

### Install Applications Password Plugin
* Navigate to Plugins on side navigation bar
* Click on `Add New`
* Install and Activate `Application Password` Plugin
* Go to users on side navigation bar
* Select the user you want to set the authorization for
* Scroll to the bottom of the screen
* Add new Application Password
* Copy the token generated. Note: Save the token, it will not be shown again.

### Test the API
* Open Postman
* Select Basic Auth and use the token generated in previous step
* Send the `POST` request with `http://127.0.0.1:8000/wp-json/wp/v2/users` and request body as
```
{
    "username": "test",
    "email": "test@test.com",
    "password": "test",
    "roles": [ "author" ]
}
```
* Verify the user is created successfully

**Congratulations!!! You are ready for API Testing**



      









