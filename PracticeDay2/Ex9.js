"use strict"

function filterByField(users, field) {
  const filteredUsers = users.filter(user => user.hasOwnProperty(field));
  return filteredUsers;
}
const users = [
  {
    username: "John Doe",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

const filteredUsers = filterByField(users, "isAstronaut");
console.log(filteredUsers);
