"use strict";

const weekdays = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  //ES6 enhanced object literals
  openingHours,
  //  order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20,00", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delieverd to ${address} at ${time}`,
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1} ,${ing2}, ${ing3} `);
  },

  orderPizza(mainIngredeint, ...otherIngredeint) {
    console.log(mainIngredeint);
    console.log(otherIngredeint);
  },
};

//Strings

// const airline = "TAP Air Portugal";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airline.length);
// console.log("B737".length);

// console.log(airline.indexOf("r"));
// console.log(airline.lastIndexOf("r"));
// console.log(airline.indexOf("portugal"));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats
//   const s = seat.slice(-1);
//   if (s === "B" || s === "E") console.log("You got the middle seat 😬");
//   else console.log("You got lucky 😎");
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// console.log(new String("Adnan"));
// console.log(typeof new String("Adnan"));

// console.log(typeof new String("Adnan").slice(1));

//Strings 2

// Working With Strings - Part 2

// const airline = "TAP Air Portugal";

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fix capitalization in name
// const passenger = "aDnaN"; // Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// // Comparing emails
// const email = "hello@adnan.io";
// const loginEmail = "  Hello@Adnan.Io \n";

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

// Alternative solution to replaceAll with regular expression
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// practice 3
// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`,
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`,
// );

// // 4.
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);
// }

//Maps

// const question = new Map([
//   ["question", "what is the best prog lang in the world"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "correct"],
//   [false, "try again"],
// ]);
// console.log(question);

// // object to map

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// //iterations

// for (const [keys, values] of question) {
//   if (typeof key === "number") console.log(`answer ${key}: ${value}`);
// }
// // const answer = Number(prompt("Your Answer"));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

// //map to array

// console.log([...question]);

// const rest = new Map();
// rest.set("name", "classico italino");
// rest.set(1, "firenze, Italy");
// console.log(rest.set(2, "lisbon,portugal"));

// rest
//   .set("catagories", ["Italian", "Pizzeria", "vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "we are open")
//   .set(false, "we are closed");

// console.log(rest.set("name"));
// console.log(rest.set(true));
// console.log(rest.set(1));

// const time = 21;
// console.log(rest.set(time > rest.get("open") && time < rest.set("close")));

// console.log(rest.has("catagories"));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "test");

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const orderSet = new Set(["pasta", "pizza", "risotoo", "pizza", "pizza"]);
// console.log(orderSet);

// console.log(new Set("Adnan"));
// console.log(orderSet.size);
// console.log(orderSet.has("pizza"));
// orderSet.add("bread");
// orderSet.delete("risotoo");
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

//eg

// const staff = ["waiter", "chef", "Manager", "waiter"];
// const staffunique = [...new Set(staff)];
// console.log(staffunique);
// console.log(new Set(["waiter", "chef", "Manager", "waiter"]).size);

//Sets

// const italianFoods = new Set([
//   "pasta",
//   "gnocchi",
//   "tomatoes",
//   "olive oil",
//   "garlic",
//   "basil",
// ]);

// const mexicanFoods = new Set([
//   "tortillas",
//   "beans",
//   "rice",
//   "tomatoes",
//   "avocado",
//   "garlic",
// ]);
// //method intersection

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log("Intersection", commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log("Union", italianMexicanFusion);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueitalianFoods = italianFoods.difference(mexicanFoods);
// console.log("Difference", uniqueitalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(mexicanFoods);
// console.log("Difference", uniqueMexicanFoods);

// const uniqueBoth = italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueBoth);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

// // propety names

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days:`;
// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// //property values

// const values = Object.values(openingHours);
// console.log(values);

// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //optional chaining

// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// const days = ["mon", "tue", "wed", "thr", "fri", "sat", "sun"];
// for (const day of days) {
//   //day getting elements dyanamically
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}`);
// }

// //methods

// console.log(restaurant.order?.(0, 1) ?? "method doesnt exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "method doesnt exist");

// //arrays

// const users = [{ name: "adnan", email: "adnnan@gmail" }];
// console.log(users[0]?.name ?? "user array empty"); //?. value on the left exist
// if (users.length > 0)
//   console.log(users[0].name); //without optimal chaining
// else console.log("user array empty");

// const rest1 = {
//   name: "La italianp",
//   numGuests: 0,
// };

// const rest2 = {
//   name: "La Pizza",
//   owner: "rosssi",
// };

// for of-loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// OR assingment
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest1.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assingment opt
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

// rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";

// console.log(rest1);
// console.log(rest2);

//nullish

/*restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);*/ // nullish values instead of falsy.

// use any data type, return any data type, short circuiting

// OR

/*console.log(3 || "Adnan");
console.log("" || "Adnan");
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 20 || null);

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);*/

// AND

/*console.log(0 && "Adnan");
console.log(7 && "adnan");

console.log("hello" && 23 && null && "Adnan"); //null

if (restaurant.orderPizza) {
  restaurant.orderPizza("mushrooms", "olives");
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "olives");*/

//destructing

// spread , becaude on RIGHT side of =

// const arr = [1, 2, ...[3, 4]];

// REST , becaude on RIGHT side of =

/*      const [a, b, ...others] = [1, 2, 3, 4, 5];
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

*/

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

// challenge1

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussoa Dortmund",
//   players: [
//     [
//       "Andrés Iniesta",
//       "Xavi Hernández",
//       "David Beckham",
//       "Thierry Henry",
//       "Wayne Rooney",
//       "Steven Gerrard",
//       "Frank Lampard",
//       "Andrea Pirlo",
//       "Gennaro Gattuso",
//       "Alessandro Del Piero",
//     ],
//     [
//       "Francesco Totti",
//       "Raúl González",
//       "Iker Casillas",
//       "Carles Puyol",
//       "Rio Ferdinand",
//       "Nemanja Vidić",
//       "Petr Čech",
//       "Robin van Persie",
//       "Arjen Robben",
//       "Wesley Sneijder",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Wayne Rooney", "Steven Gerrard", "Frank Lampard", "Andrea Pirlo"],
//   date: "nov 9, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

//challenge2

// for (const [indexs, playernames] of game.scored.entries())
//   console.log(`Goal ${indexs + 1}: ${playernames}`);

// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length;
// console.log(average);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of ${teamStr} ${odd}`);
// }

// // 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// // 2
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// // 3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// console.log(players1Final);

// // 5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// console.log(team1, draw, team2);

// // 6
// const printGoals = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// printGoals(...game.scored);

// // 7
// team1 < team2 && console.log(`${game.team1} is more likely to win`);
// team2 < team1 && console.log(`${game.team2} is more likely to win`);
