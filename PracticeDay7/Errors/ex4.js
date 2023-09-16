"use strict"

function gradeLabs(labs) {
  for (let lab of labs) {
    let result;
    try {
      if (typeof lab.runLab === 'function') {
        result = lab.runLab(3);
      } else {
        throw new Error('runLab is not defined');
      }
    } catch (error) {
      result = 'Error thrown';
    }

    console.log(`${lab.student}: ${result}`);
  }
}

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

gradeLabs(studentLabs2);
