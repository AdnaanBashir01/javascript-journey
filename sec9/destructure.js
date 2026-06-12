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
};

restaurant.orderDelivery({
  time: "23,30",
  address: "abcdefghi",
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: "abcdefghi",
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant; // setting menu to default value
console.log(menu, starters);

//mutating values
let a = 10;
let b = 20;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj); //destructing var in parenthesis ()
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
