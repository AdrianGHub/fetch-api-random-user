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
    .then(json => showRandomUsers(json.results))
    .catch(err => console.log(err));
};

const showRandomUsers = users => {
  const usersList = document.querySelector(".users-list");
  usersList.textContent = "";
  users.forEach(user => {
    const item = document.createElement("li");
    item.className = "user";
    item.innerHTML = `
    <img class="user__image" src="${user.picture.medium}">
    <p class="user__name">${user.name.title.toUpperCase()} ${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}</p>
    `;

    usersList.appendChild(item);
  });
};

document
  .querySelector(".users-generator--js")
  .addEventListener("submit", getRandomUsers);

console.log(`Hello world!`);
