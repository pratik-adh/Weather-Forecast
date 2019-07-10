# Weather-Forecast
Weather Forecast using Node.js
First of all, we need to install request module in our project so that we can request from our node application.In terminal we need to initialize weather app as an NPM project.<br>
To do so, we need to run npm from the root of our project, i.e; 'npm init'. After doing so, we need to fill out tons of values, nut we will fill default values for all of them.<br>
We will simply press Ctrl+c to shut that down. Then we will again use npm init with the y flag i.e. npm init -y, this says answer yes to ever single question using the default value. After doing so, a package.json file automatically creates in the root of our project folder with all the default values in place. We can customize them according to our needs.<br> 
And finally, we can install the npm modules that we want to use in our project.<br>
To install request module in our app, we will type 'npm i request@(latest_version name)'.
After installing package-lock.json folder will be created with node_modules with all the required file and functions inside it which will be used to run request in our project.<br>

In this project we will be using mapbox api to fetch the latitude and longitude of the current location using geocoding
(forward geocoding) and fetch that data to DarkSky API to get we information the address provided by the user.<br>

Finally, the user needs to provide a valid address using command line arguments to know the details of weather is the particular location provided.<br>

NOTE: Please download the required modules before running this applications:<br>
1. argv<br>
2. request
