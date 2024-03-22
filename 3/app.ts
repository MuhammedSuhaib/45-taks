
 let personName: string = "hannan";
let uppercase: string = personName.toUpperCase();
let lowercase: string = personName.toLowerCase();
let titlecase: string = personName.replace(/\b\w/g, c=> c.toUpperCase() );
console.log('Name in Uppercase =', uppercase );
console.log('Name in Lowercase =', lowercase);
console.log('Name in titlecase =', titlecase);