// const name = 'Hero';const age = 34;
// const person = {name, age}; 
// console.log(person);


// const person = { name : "Babe" }
// console.log(person.name);
// console.log(person["name"]);


const adventurer = { name: 'Alice',cat: {name: 'Lucy'} };
const ratName = adventurer?.rat?.name;
// console.log(ratName);

let person =null;
// console.log(person ? person : "person is null");

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const words = [];

const result = words.filter(word => word.length > 6);

// console.log(result);


const obj = {a:1};
console.log(Object.keys(obj).length===0);