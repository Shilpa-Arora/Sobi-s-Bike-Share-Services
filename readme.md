# Sobi's Bike Share Services

Wordpress site build for client's bike share services. 

##Task Completed

*** Visually appealing responsive site with functionality created.
*** AODA guidelines followed.
*** Tabular data displayed.
*** Product filter buttons created.

## Technologies Used

The technologies used in this project are as follows.

1. Wordpress with MySQL
2. JavaScript Libraries: `Ajax, math.js, jQuery`
3. CSS library: `Bootstrap`

## Problem Encountered

* `CORS ISSUE` with realtime data from different server

## Solution

* `1. Add browser plugin to allow access`

 Use plugins available for different browsers to allow cross platform server access for your local machine and set your javascript accordingly. Later on, complie everything together or change access settings for the server side to allow permanent access.

 ### Plugins
  
  `Google Chrome`
  
  https://chrome.google.com/webstore/category/extensions?hl=en

  https://chrome.google.com/webstore/category/extensions?hl=en

  `FireFox`

  https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/

  https://addons.mozilla.org/en-US/firefox/addon/cross-domain-cors/

* `2. Add access settings to server`

Access seeting can be done on server side by different means. 

***Easiest solution: <?php header("Access-Control-Allow-Origin: *");

* `3. Save json to desktop`
 
 Save the json to your local machine and use it for setting everything else.

 ### Solution I used is `Add browser plugin to allow access`

 I used this as a solution to get real time feed as that was my task. If number of docks and bikes changes my client side would change automatically without causing any discreancy in real time feed.






