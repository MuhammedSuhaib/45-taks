var personName = "hannan";
var uppercase = personName.toUpperCase();
var lowercase = personName.toLowerCase();
var titlecase = personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log('Name in Uppercase =', uppercase);
console.log('Name in Lowercase =', lowercase);
console.log('Name in titlecase =', titlecase);
