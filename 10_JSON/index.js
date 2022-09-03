// stringify
// parse

// 1. conver object JS to string JSON
var myDog = {
    name: 'Milu',
    age: 1,
    dead: false
};
var myDogString = JSON.stringify(myDog);
console.log(myDogString, typeof(myDogString));

// 2. convert string JSON to object JS
var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat.name);
