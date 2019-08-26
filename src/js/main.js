"use strict";
const getRandomUsers = e => {
  e.preventDefault();

  const usersGender = document.querySelector('[name = "users-gender"]').value;
  const usersNumber = document.querySelector('[name = "users-number"]').value;
  const url = `https://randomuser.me/api/?results=${usersNumber}&gender=${
    usersGender === "both" ? "male,female" : usersGender
  }`;

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

document
  .querySelector(".users-generator--js")
  .addEventListener("submit", getRandomUsers);

console.log(`Hello world!`);
