// Have at least 5 tests evaluate to True
let inputDevice: string = 'mouse';
console.log("Is inputDevice == 'mouse'? I predict True.");
console.log(inputDevice == 'mouse');

let outputDevice: string = 'speaker';
console.log("Is outputDevice == 'speaker'? I predict True.");
console.log(outputDevice == 'speaker');


let js: string = 'Javascript';
console.log("Is js == 'Javascript'? I predict True.");
console.log(js == 'Javascript');

console.log('Is mouse !== speaker ? I predict True');
console.log(inputDevice !== "speaker");

console.log('Is inputDevice !== outputdevice ? I predict True');
console.log(inputDevice !== outputDevice);

//  and another 5 tests evaluate to False.

console.log('Is mouse === speaker ? I predict False');
console.log(inputDevice === "speaker");

console.log('Is inputDevice === outputdevice ? I predict False');
console.log(inputDevice === outputDevice);

console.log("Is js !== 'Javascript'? I predict False.");
console.log(js !== 'Javascript');

console.log("Is outputDevice !== 'speaker'? I predict False.");
console.log(outputDevice !== 'speaker');

console.log("Is inputDevice !== 'mouse'? I predict False.");
console.log(inputDevice !== 'mouse');
