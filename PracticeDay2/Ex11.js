"use strict"

function getAverageAge(users) {
  const totalAge = users.reduce((sum, user) => sum + user.age, 0);
  const averageAge = totalAge / users.length;
  return averageAge;
}

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    age: 56,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    age: 55,
  },
  {
    username: "Hripsime Soghomonyan",
    lang: "Arm",
    age: 27,
  }
];

const averageAge = getAverageAge(users);
console.log(averageAge); 
