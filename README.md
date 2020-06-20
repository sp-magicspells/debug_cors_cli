# debug_cors_cli
Debug web CORS issues using command line

When your website is accessing resources from the other domains it is very critical to ensure that all the domains are following the CORS rules and CORS compliant. 

Using the `index.html` in the web browser will do an AJAX request to the domain you want to use and you can see the errors if there are any in console. Edit `index.js` `url` to change the resource URL. Also by default `withCredentials` set to true and can be disabled by setting it to false in the same file. 
