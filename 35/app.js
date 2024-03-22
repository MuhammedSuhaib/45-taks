// Animals: Think of at least three different animals 
// that have a common characteristic. Store the names of these animals in a list, and then use 
// a for loop to print out the name of each animal.
var Animals = ['Dog', 'Cat ', 'Rabbit'];
Animals.forEach(function (animal) {
    console.log(animal);
});
// Modify your program to print a statement about each animal, such as
//  A dog would make a great pet. • Add a line at the end of your program
//  stating what these animals have in common. You could print a 
// sentence such as Any of these animals would make a great pet!
Animals.forEach(function (animal) {
    console.log("\n \n  A  ".concat(animal, ", would make a great pet. "));
});
console.log("\n These animals share the common trait of being popular \npets for their ability to bond with humans,\n providing companionship and joy. They are all mammals.\n \n \t \t  \"Any of these animals would make a great pet!\"");
