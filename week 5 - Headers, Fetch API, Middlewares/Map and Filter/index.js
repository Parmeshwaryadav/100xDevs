// Map and Filter

// 1. Problem Statement: given an array we need to multiply every element by 2

let value = [2, 4, 5, 5, 6, 6, 7];

const multipliedNumber = value.map((num, index) => {
  return num * 2;
});

// console.log(multipliedNumber);

const newArray = [];

for (let i = 0; i < value.length; i++) {
  newArray.push(value[i] * 2);
}
console.log(newArray);
