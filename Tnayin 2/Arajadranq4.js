'use strict'

function getUserNames(users) {
  return users.map(user => user.username);
}

const users = [ 
  { 
    username: "Yuri Gagarin", 
    lang: "ru", 
  }, 
  { 
    username: "Nil Armstrong", 
    lang: "ENG", 
  },
];

const usernames = getUserNames(users);
console.log(usernames);
