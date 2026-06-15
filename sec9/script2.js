"use strict";
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20,00",
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`,
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ,${ing2}, ${ing3} `);
  },

  orderPizza: function (mainIngredeint, ...otherIngredeint) {
    console.log(mainIngredeint);
    console.log(otherIngredeint);
  },
};

//destructing

// spread , becaude on RIGHT side of =

const arr = [1, 2, ...[3, 4]];

// REST , becaude on RIGHT side of =

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 9);
add(8, 2, 4, 5, 6, 3, 1);

const x = [23, 7, 5];
add(...x);

restaurant.orderPizza("mushrooms", "onions", "olives");

/////////////////////////////////////

//Spread operator
/*const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

//spread oprt
const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];
//join 2 arr
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables are : arrays , strings , maps , sets , NOT objects
const str = "Adnan";
const letters = [...str, "", "S"];
console.log(letters);
console.log(str);
// console.log(`${} Bashir`);

//real world example
const ingredients = [
  // prompt("let\s make pasta! Ingredeint 1?"),
  // prompt("let\s make pasta! Ingredeint 2?"),
  // prompt("let\s make pasta! Ingredeint 3?"),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//objects
const newRestaurant = { foundIn: 1998, ...restaurant, founder: "Guiseppe" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristotante Roma";

// copying other with spread

console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

///////////////////////////////
//destructuring objects

// restaurant.orderDelivery({
//   time: "23,30",
//   address: "areena 01",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "areena 01",
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant; // setting menu to default value
// console.log(menu, starters);

// //mutating values
// let a = 10;
// let b = 20;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj); //destructing var in parenthesis ()
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
