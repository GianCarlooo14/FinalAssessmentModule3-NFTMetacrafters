// This is a single line comment
/*This is a 
multi-line comment */
console.log("Hello, This is a sample");

var Number;
Number = 8;
console.log(Number);

function functionName() {
    console.log("Hello, My Name is Gian");
}
functionName();

function plusFive (sumnum) {
    return sumnum + 5 
}

console.log(plusFive(6));

myName = "Gian Carlo";
console.log(myName);

myVariable = 18;
console.log(myVariable);

var myVar;
myVar = 50;
var myNum;
myNum = myVar;
console.log(myNum);

camper = "Gian";
let camper = "Carlo";
console.log(camper);

const favPet = "Dog";
console.log(favPet);

const myVar = 20 / 30;
console.log("myVar now has the value of " + myVar);

let x = 18
let y = 7;
console.log(x % y);

let myVar = 2;
myVar = myVar * 5;
console.log(myVar);

const sampleStr = "Gian said, \"I can do this\".";
console.log(sampleStr);

let ourStr = " Me first. ";
ourStr += " Me second, ";
console.log(ourStr);

const anAdj = "Pogi!";
let ourStr = "Gian is so ";
ourStr += anAdj;
console.log(ourStr);

console.log("12345 789".length);

const firstName = "Abibi";
console.log(firstName.length);

let myStr = "Bob";
myStr = "Job";
console.log(myStr);

for (var i=1; i<=10; i++) {
    console.log(i);
}

function test (x , y) {
    if (x == y) {
      return "It is equal";
    }
    return "It is not";
  }
console.log(test(9,9));
  test(true);
  test(false);

let x = 10;
let y = 10;
let isGreater = x == y;
console.log(isGreater);

function test (x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
  console.log(test(0));

  const day = 1
  switch (day) {
    case 1:
      console.log("Monday");
      break;
    case 2:
      console.log("Tuesday");
      break;
    case 3:
      console.log("Wednesday");
      break;
    case 4:
      console.log("Weekend");
      break;
  }
  
  function findGreater(a, b) {
    return a > b ? "a is greater" : "b is greater or equal";
  }
  console.log(findGreater(10,10));

  const teams = [["Lakers", 17], ["Celtics", 18]];
console.log(teams);

const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(data);
const num = array[2];
console.log(num);

const ourArray = [50, 40, 30];
ourArray[3] = 20;
console.log(ourArray);

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr[i].length; j++){
    console.log(i, j ,arr[i][j]);
  }
}

const arr1 = [1, 2, 3];
arr1.push(4);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);

console.log(arr2);

const arr3 = [[10, 11, 12], 13, 14];
arr3.push(15, 16, 17, [18, 19, 20]);

console.log(arr3);

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);

const arr3 = [[10, 11, 12], 13, 14, 15];
const oneDown = arr3.pop();
console.log(oneDown);
console.log(arr3);

const arr3 = [[10, 11, 12], 13, 14, 15];
const oneDown = arr3.shift();
console.log(oneDown);
console.log(arr3);

const arr3 = [[10, 11, 12], 13, 14, 15];
const oneDown = arr3.shift();
arr3.unshift(9);
console.log(oneDown);
console.log(arr3);

const cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
console.log(cat);

const anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
console.log(anotherObject);

const NBA = {
  Team: "Lakers",
  Championship: 17,
  RetiredNum: 12
};
console.log(NBA);

const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
console.log(prop1val);

const name = {
  first: "Gian",
  second: "Carlo"
};
const firstname = name.first;
const secondname = name.second;
console.log(firstname);

const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
 console.log(myObj["Space Name"]);

 const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.name = "Happy Camper";
ourDog.bark = "woof woof";
delete ourDog.legs;
console.log(ourDog);

function functionName() {
  console.log("Hello World");
}
functionName();

function testFun(param1, param2) {
  console.log(param1, param2);
}
testFun("Hello", "World");

function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
console.log(answer);

function myTest() {
  const loc = "foo";
  console.log(loc);
}

myTest();
console.log(loc);

const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

const newVar = myFun();
console.log(newVar);

function sum(num1, num2) {
  return num1 + num2;
}

const ourSum = sum(5, 12);
console.log(ourSum);

function isEqual(a, b) {
  return a === b;
}

console.log(isEqual(12, 12));

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}
console.log(ourArray);

const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
console.log(ourArray);

const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
console.log(ourArray);

const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
console.log(arr);

const arr = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
console.log(arr);

const ourArray = [];
let i = 0;

do {
  ourArray.push(i);
  i++;
} while (i < 5);

console.log(ourArray);

const ourArray = []; 
let i = 5;

while (i < 5) {
  ourArray.push(i);
  i++;
}
console.log(ourArray);

const ourArray = []; 
let i = 5;

do {
  ourArray.push(i);
  i++;
} while (i < 5);
console.log(ourArray);

const a = parseInt("123");
console.log(a);


function tryIt(numberAsString) {
  if (parseInt(numberAsString) == 123){
    return console.log("Yay!");
  }
  console.log("Boo!");

}
tryIt("123");

