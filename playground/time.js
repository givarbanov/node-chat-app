const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(7, 'year').subtract(3, 'month');
// console.log(date.format('MMM Do YYYY'));

var date = moment(1234);

// console.log(date.format('LT'));
console.log(date.format('h:mm a'));
