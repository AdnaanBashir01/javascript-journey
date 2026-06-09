"use strict";
// function caclAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `you are ${age}. born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenail = true;
//       // creating new variable with same name as outer scope variable
//       const firstName = "Simon";

//       const str = `you r millenail,${firstName}`;
//       console.log(str);
//     }
//     console.log(millenail);
//   }
//   printAge();

//   return age;
// }
// // firstname alreagy in global scope
// const firstName = "Bob";
// caclAge(1994);

console.log(this); //global scope

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1992);

console.log(this);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this); //this keyword of parent scope.
};
calcAgeArrow(1992);

const adnan = {
  year: 2003,
  caclAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }, //this inside method, is object that is calling the method
};
adnan.caclAge();
