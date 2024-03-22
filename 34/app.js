// izzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a 
// for loop to print the name of each pizza.
var favoPizzas = ['Pizza Bean', 'Chicken Fajita', 'Chicken Tandori'];
favoPizzas.forEach(function (Pizza) {
    console.log(Pizza);
});
// • Modify your for loop to print a sentence using the name of the pizza 
// instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing 
// a simple statement like I like pepperoni pizza.
favoPizzas.forEach(function (Pizza) {
    console.log("\n \n  I like ".concat(Pizza, ", pizza"));
});
console.log("I savor the cheesy delight of \"Pizza Bean,\" its flavors a comforting embrace. \n\"Chicken Fajita\" tantalizes my taste buds with its spicy kick,\n a culinary adventure on every slice. \"Chicken Tandoori\" beckons with its\n  aromatic spices, each bite a journey to culinary bliss.\n  \n  \t \t I really love pizza!");
