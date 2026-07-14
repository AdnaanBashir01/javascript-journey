// const caclage = function (birthyear) {,
//   return 2037 - birthyear;
// };

// const yersurtt = function (birthyear, firstname) {
//   const age = caclage(birthyear);
//   const rettt = 65 - age;

//   if (rettt > 0) {
//     console.log(`${firstname} retires in ${rettt} years.`);
//     return rettt;
//   } else {
//     console.log(`${firstname} retired 🍾🎉.`);
//     rettt - 1;
//   }
//   // return `${firstname} retires in ${rettt} years.`;
// };
// console.log(yersurtt(1991, "Mark"));
// console.log(yersurtt(1995, "Bobby"));

// ARRAYs

// const friends = ["micheal", "bobby", "david", "kandy", "samuel"];
// console.log(friends);

// const yearss = new Array(1991, 1992, 1993, 1996);

// console.log(friends[0]); //element at 0 index.
// console.log(friends[2]); // at 2 index.

// console.log(friends.length); //amount of elements in the array.
// console.log(friends[friends.length - 1]);

// friends[2] = "Simon"; // we can mutate arrays.
// console.log(friends);

// const firstname = "Adnan";
// const adnan = [firstname, "Bashir", 2026 - 2003, "sw enginer", friends];
// console.log(adnan);
// //exercise
// const caclage = function (birthyear) {
//   return 2037 - birthyear;
// };
// const years = [1991, 1998, 1993, 2002, 2010];
// const age1 = caclage(years[0]);

// const ages = [
//   caclage(years)[0],
//   caclage(years)[1],caclage(years[2]),
//   caclage(years[years.length]),
// ];

// ADD ELEMENTS

// const friends = ["AA", "BB", "CC", "DD"];
// const newLen = friends.push("EE");
// console.log(friends);
// console.log(newLen);

// friends.unshift("A0");
// console.log(friends);

// // /REMOVE ELEMENTS

// friends.pop(); //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("CC"));

// friends.push(23);
// console.log(friends.includes("DD"));
// console.log(friends.includes(23));

// if (friends.includes("CC")) {
//   console.log("you hve frnd called CC");
// }

// OBJECTS

// const adnan = {
//   firstname: "Adnan",
//   lastname: "Bashir",
//   address: "srinagr",
//   contacts: ["123221", "132311"],
//   job: "web dev",
// };
// console.log(adnan);

// console.log(adnan.firstname); //property from on object , dot notation
// console.log(adnan["lastname"]); // bracket

// const namekey = "name";
// console.log(adnan["first" + namekey]); //Adnan,   exceuting  + operstion , retrieve the property
// console.log(adnan["last" + namekey]); //Bashir

// // example
// const interstedIn = prompt(
//   "What do you want to know about Adnan? choose between firstname,lastname,address,contact,and job.",
// );
// if (adnan[interstedIn]) {
//   console.log(adnan[interstedIn]); // js replaces interstedin with actual value  of the variable
// } else {
//   console.log("wrong request.");
// }

// adnan.location = "In";
// adnan["twitter"] = "addy123";
// console.log(adnan);

// //challenge adnan has 2 contacts and one is
// console.log(
//   `${adnan.firstname} has ${adnan.contacts.length} contcs and one is ${adnan.contacts[0]}`,
// ); //works it follows operator precedence, . member access, []computed m access, associativity if left to right.

//OBJECT METHODS

// const jonas = {
//   fname: "Jonas",
//   lname: "Schtedd",
//   job: "teacher",
//   birtyear: 1991,
//   friends: ["mich", "adnn", "eddy"],
//   hasdrivl: true,
//   calcAge: function (birthyear) {
//     return 2037 - birthyear;
//   };

//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthyear; //this >points to jonas, no need to change
//   }

//   calcAge: function(){
//     this.age = 2037 - this.birthyear; //new property on curent object, with "this" keyword
//      return this.age;
//   },

//  getsummary: function (){
//   return  `${this.fname} is a ${this.age} old  ${this.job} and he has a ${this.hasdrivl ? 'a' : 'no'} driver's license.`;
// console.log(jonns)
//  }
// };

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);
// // console.log(jonas['calcAge'(1991)]);

// console.log(jonas.getsummary);

// challenge
// const mark = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
// calcBMI: function(){
//   this.bmi = this.mass / this.height ** 2;
//   return this.bmi
// }
// },

// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function(){
//   this.bmi = this.mass / this.height ** 2;
//   return this.bmi
// }
// }
// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// if(mark.bmi > john.bmi){
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
// }
// else if(john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
// };

// const arrayy = [
//   'Adnan',
//   2026-2003,
//   'web dev',
//   '6006673264',
//   true
// ];

// const types = [];

// for(let i = 0; i < arrayy.length; i++){
//   console.log(arrayy[i]), typeof arrayy[i];

// // types[i] = typeof arrayy[i];
// arrayy.push(typeof arrayy[i]);
// }
// console.log(types);

// const years = [1991,1992,1993,1994,1995];
// const ages = [];

// for (let i = 0; i <years.length; i++){
//   ages.push (2026 - years[i]);
// }
// console.log(ages);

//CONTINUE and BREAK

// const arrayy = ["Adnan", 2026 - 2003, "web dev", "6006673264", true];

// console.log('ONLY STRINGS');
// for (let i = 0; i < arrayy.length; i++) {
//   if (typeof arrayy[i] !== "string") continue;

//   (console.log(arrayy[i]), typeof arrayy[i]);
// }

// console.log('ONLY BREAK w No.');
// for (let i = 0; i < arrayy.length; i++) {
//   if (typeof arrayy[i] === "number")
//      break;

//   (console.log(arrayy[i]), typeof arrayy[i]);
// }

// LOOPING IN BACKWARDS LOOPS IN LOOPS

// const arrayy = ["Adnan",'Bashir', 2026 - 2003, "web dev", "6006673264", true];
// for(let i = arrayy.length - 1; i >= 0; i--){
// console.log(i,arrayy[i]);
// }

// for(let exercise = 1; exercise >= 10; exercise++){
// console.log(`Starting exercise ${exercise}`);

// for(let rep = 1; rep < 6; rep++){
//   console.log(`Lifting weights ${rep}`);
// }
// };

// WHILE

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights ${rep}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`while: Lifting weights ${rep}`);
//   rep++;
// }

// let sixer = Math.trunc(Math.random() * 6) + 1;
// console.log(sixer);

// while (sixer !== 6) {
//   console.log(`hitted six ${sixer}`);
//   sixer = Math.trunc(Math.random() * 6) + 1;
//   if (sixer === 6) console.log(`six`);
// }
