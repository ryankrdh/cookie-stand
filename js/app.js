'use strict';

function StoreInformation(location, cookiesSoldSixAm, cookiesSoldSevenAm, cookiesSoldEightAm, cookiesSoldNineAm, cookiesSoldTenAm,
  cookiesSoldElevenAm, cookiesSoldTwelvePm, cookiesSoldOnePm, cookiesSoldTwoPm, cookiesSoldThreePm, cookiesSoldFourPm, cookiesSoldFivePm,
  cookiesSoldSixPm, cookiesSoldSevenPm, cookiesSoldEightPm, cookiesSoldTotal) {
  this.location = location;
  this.cookiesSoldSixAm = cookiesSoldSixAm;
  this.cookiesSoldSevenAm = cookiesSoldSevenAm;
  this.cookiesSoldEightAm = cookiesSoldEightAm;
  this.cookiesSoldNineAm = cookiesSoldNineAm;
  this.cookiesSoldTenAm = cookiesSoldTenAm;
  this.cookiesSoldElevenAm = cookiesSoldElevenAm;
  this.cookiesSoldTwelvePm = cookiesSoldTwelvePm;
  this.cookiesSoldOnePm = cookiesSoldOnePm;
  this.cookiesSoldTwoPm = cookiesSoldTwoPm;
  this.cookiesSoldThreePm = cookiesSoldThreePm;
  this.cookiesSoldFourPm = cookiesSoldFourPm;
  this.cookiesSoldFivePm = cookiesSoldFivePm;
  this.cookiesSoldSixPm = cookiesSoldSixPm;
  this.cookiesSoldSevenPm = cookiesSoldSevenPm;
  this.cookiesSoldEightPm = cookiesSoldEightPm;
  this.cookiesSoldTotal = cookiesSoldTotal;
}

var firstAndPike = new StoreInformation('1st and Pike', 0, 0);

console.log(firstAndPike);

// var seaTacAirport = new StoreInformation('SeaTac Airport', 0, 0);

// var seattleCenter = new StoreInformation('Seattle Center', 0, 0);

// var capitolHill = new StoreInformation('Capitol Hill',0 ,0);

// var alki = new StoreInformation('Alki',0 ,0);

// var cookiesSoldTotalPerHour = new StoreInformation('Totals',0 ,0);

// var firstAndPike = {
//   location: 'First and Pike',
//   averageCookies: 6.3,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   max: 65,
//   min: 23,

// for (var i = 0; i < data.length; i++) {
//   var maxCust = firstAndPike.max,
//   var minCust = firstAndPike.min,
//   var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//   var cookiesPerCustomer = (customerPerHour*firstAndPike.averageCookies);
//   var final = Math.floor(cookiesPerCustomer);
//   firstAndPike.cookiesTotal = cookiesPerCustomer + firstAndPike.cookiesTotal;
//   var cookiesTotalRounded = Math.floor(firstAndPike.cookiesTotal);


// var table = document.getElementById('shell');
// var data = [];





// function Course(title, instructor) {
//   this.title = title;
//   this.instructor = instructor;
// }

// var code201 = new Course('201', 'Jeff');

// for (var i=0; i < Course.length; i++) {
//   data.push(
//     '<td>' + code201[i].title + '</td>' +
//     '<td>' + code201[i].instructor + '</td>' +
//     '<td>' + code201[i].profession + '</td>'
//   );
// }

// for (var j = 0; j < data.length; j++) {
//   var newRow = document.createElement('tr');
//   newRow.innerHTML = data[j];
//   table.appendChild(newRow);
// }


















// var cookieStore = [
//   {
//     location: '1st and Pike',
//     time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   },
//   {
//     location: 'SeaTac Airport',
//     time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   },
//   {
//     location: 'Seattle Center',
//     time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   },
//   {
//     location: 'Capitol Hill',
//     time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   },
//   {
//     location: 'Alki',
//     time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   },
//   {
//     location: 'Totals',
//     time: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//   }
// ];




// var hours = [
//   '6am: ',
//   '7am: ',
//   '8am: ',
//   '9am: ',
//   '10am: ',
//   '11am: ',
//   '12pm: ',
//   '1pm: ',
//   '2pm: ',
//   '3pm: ',
//   '4pm: ',
//   '5pm: ',
//   '6pm: ',
//   '7pm: ',
//   '8pm: ',
// ];
// var firstPikeUl = document.getElementById('firstAndPike');
// var seaTacUl = document.getElementById('SeaTacAirport');
// var seaCenUl = document.getElementById('SeattleCenter');
// var capHillUl = document.getElementById('CapitolHill');
// var alkiUl = document.getElementById('alkiBeach');

// // function multiply (a, b) {
// //   var result = a*b;
// //   var final = Math.floor(result);
// //   return (final);
// // }

// // function randomNumber (min, max) {
// //   var result = Math.random() * (max - min + 1) + min;
// //   var final = Math.floor(result);
// //   console.log(final);
// //   return final;
// // }

// var firstAndPike = {
//   location: 'First and Pike',
//   averageCookies: 6.3,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 65;
//       var minCust = 23;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*firstAndPike.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       firstAndPike.cookiesTotal = cookiesPerCustomer + firstAndPike.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(firstAndPike.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       firstPikeUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };


// var seaTacAirport = {
//   location: 'SeaTac Airport',
//   averageCookies: 1.2,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 24;
//       var minCust = 3;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*seaTacAirport.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       seaTacAirport.cookiesTotal = cookiesPerCustomer + seaTacAirport.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(seaTacAirport.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       seaTacUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// var seattleCenter = {
//   location: 'Seattle Center',
//   averageCookies: 3.7,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 38;
//       var minCust = 11;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*seattleCenter.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       seattleCenter.cookiesTotal = cookiesPerCustomer + seattleCenter.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(seattleCenter.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       seaCenUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// var capitolHill = {
//   location: 'Capitol Hill',
//   averageCookies: 2.3,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 38;
//       var minCust = 20;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*capitolHill.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       capitolHill.cookiesTotal = cookiesPerCustomer + capitolHill.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(capitolHill.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       capHillUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// var alki = {
//   location: 'Alki',
//   averageCookies: 4.6,
//   cookiesPerCustomer: 0,
//   cookiesTotal: 0,
//   render: function () {
//     for(var i = 0; i < hours.length; i++) {
//       var liEl = document.createElement('li');
//       var maxCust = 16;
//       var minCust = 2;
//       var customerPerHour = (Math.random() * (maxCust - minCust + 1) + minCust);
//       var cookiesPerCustomer = (customerPerHour*alki.averageCookies);
//       var final = Math.floor(cookiesPerCustomer);
//       alki.cookiesTotal = cookiesPerCustomer + alki.cookiesTotal;
//       var cookiesTotalRounded = Math.floor(alki.cookiesTotal);
//       liEl.textContent = `${hours[i]}: ${final} cookies.`;
//       alkiUl.appendChild(liEl);
//     }
//     liEl.textContent = `Total: ${cookiesTotalRounded} cookies.`;
//   }
// };

// firstAndPike.render();
// seaTacAirport.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();
