"use strict";

function caclAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `you are ${age}. born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenail = true;
      // creating new variable with same name as outer scope variable
      const firstName = "Simon";

      const str = `you r millenail,${firstName}`;
      console.log(str);
    }
    console.log(millenail);
  }
  printAge();

  return age;
}
// firstname alreagy in global scope
const firstName = "Bob";
caclAge(1994);

console.log(this); //global scope
