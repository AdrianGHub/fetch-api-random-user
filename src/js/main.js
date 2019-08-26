"use strict";

const getRandomUsers = () => {
  const url = "https://randomuser.me/api/?results=10";

  fetch(url)
    .then(res => {
      if (res.status !== 200) {
        throw Error("This isn't 200 status response");
      } else {
        return res.json();
      }
    })
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

document.querySelector("button").addEventListener("click", getRandomUsers);

console.log(`Hello world!`);
