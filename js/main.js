!function(e){var n={};function r(c){if(n[c])return n[c].exports;var t=n[c]={i:c,l:!1,exports:{}};return e[c].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=n,r.d=function(e,n,c){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:c})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)r.d(c,t,function(n){return e[n]}.bind(null,t));return c},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s=0)}([function(module,exports,__webpack_require__){"use strict";eval('\r\nconst getRandomUsers = e => {\r\n  e.preventDefault();\r\n\r\n  const usersGender = document.querySelector(\'[name = "users-gender"]\').value;\r\n  const usersNumber = document.querySelector(\'[name = "users-number"]\').value;\r\n  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${\r\n    usersGender === "both" ? "male,female" : usersGender\r\n  }`;\r\n\r\n  fetch(url)\r\n    .then(res => {\r\n      if (res.status !== 200) {\r\n        throw Error("This isn\'t 200 status response");\r\n      } else {\r\n        return res.json();\r\n      }\r\n    })\r\n    .then(json => console.log(json))\r\n    .catch(err => console.log(err));\r\n};\r\n\r\ndocument\r\n  .querySelector(".users-generator--js")\r\n  .addEventListener("submit", getRandomUsers);\r\n\r\nconsole.log(`Hello world!`);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9ELFlBQVk7QUFDaEU7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmNvbnN0IGdldFJhbmRvbVVzZXJzID0gZSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICBjb25zdCB1c2Vyc0dlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lID0gXCJ1c2Vycy1nZW5kZXJcIl0nKS52YWx1ZTtcclxuICBjb25zdCB1c2Vyc051bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lID0gXCJ1c2Vycy1udW1iZXJcIl0nKS52YWx1ZTtcclxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8/cmVzdWx0cz0ke3VzZXJzTnVtYmVyfSZnZW5kZXI9JHtcclxuICAgIHVzZXJzR2VuZGVyID09PSBcImJvdGhcIiA/IFwibWFsZSxmZW1hbGVcIiA6IHVzZXJzR2VuZGVyXHJcbiAgfWA7XHJcblxyXG4gIGZldGNoKHVybClcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICB0aHJvdyBFcnJvcihcIlRoaXMgaXNuJ3QgMjAwIHN0YXR1cyByZXNwb25zZVwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKGpzb24gPT4gY29uc29sZS5sb2coanNvbikpXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIi51c2Vycy1nZW5lcmF0b3ItLWpzXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZ2V0UmFuZG9tVXNlcnMpO1xyXG5cclxuY29uc29sZS5sb2coYEhlbGxvIHdvcmxkIWApO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n')}]);