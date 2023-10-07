"use strict"

class Users {
  constructor(usersArray) {
    this.userMap = new Map();
    usersArray.forEach(user => {
      this.userMap.set(user.id, user);
    });
  }

  addUsers(usersArray) {
    usersArray.forEach(user => {
      this.userMap.set(user.id, user);
    });
  }

  getUserById(userId) {
    return this.userMap.get(userId) || null;
  }
}

const mappedUser = new Users([
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
]);

const userById1 = mappedUser.getUserById(1);
console.log(userById1); 

mappedUser.addUsers([{ id: 3, name: "Ann", email: "ann@example.com" }]);
const userById3 = mappedUser.getUserById(3);
console.log(userById3); 
