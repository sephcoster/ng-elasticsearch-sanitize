# node-elasticsearch-sanitize

This is an Angular JS rework of the following:
http://stackoverflow.com/questions/16205341/symbols-in-query-string-for-elasticsearch

#TLDR; 
This will accept arbitrary string as input and sanitize it into a string which can be safely plugged into an ElasticSearch query_string route without clashing with any Query DSL modifications (fuzzyness, wild cards, et al) you may make.

#Development
To install all dependencies run `npm install` followed by `bower install`. To run tests run `npm test`. To run lint run `npm lint`. To build run `grunt build`.

#Use
To use include (depending on preference) either `index.js` or `index.min.js`.
Then at module level inject `lx.escapeElastic`, like so:  
`angular.module('myModule',['lx.escapeElastic']);`  
And at injection time:  
`angular.module('myModule', ['escapeElastic', function (escapeElastic) {}]);`  
Then to use, simply pass it a string:  
`var myString = "AND YOU WILL KNOW I AM THE LORD WHEN I LAY MY VENGEANCE UPON YOU!"
console.log(escapeElastic(myString))`  
Will print:  
`\A\N\D YOU WILL KNOW I AM THE LORD WHEN I LAY MY VENGEANCE UPON YOU\!`

#Dependencies
Your system must require (above this library), angular js and either underscore js or lodash js.

#Installation

Run either `npm install ng-elasticsearch-sanitize`, or `bower install lx-ngElasticSanitize`.