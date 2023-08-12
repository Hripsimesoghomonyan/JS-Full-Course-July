"use strict"

function filterUsers(users) {
  return users.filter(user => user.lang !== 'ru');
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

const filteredUsers = filterUsers(users);
console.log(filteredUsers);
