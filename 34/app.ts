// izzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a 
// for loop to print the name of each pizza.

let favoPizzas: string[] = ['Pizza Bean', 'Chicken Fajita' ,'Chicken Tandori'];
favoPizzas.forEach(Pizza => {console.log(Pizza);
});


// • Modify your for loop to print a sentence using the name of the pizza 
// instead of printing just the name of the pizza.
//  For each pizza you should have one line of output containing 
// a simple statement like I like pepperoni pizza.

favoPizzas.forEach(Pizza => {console.log(`\n \n  I like ${Pizza}, pizza`);
});

console.log(`I savor the cheesy delight of "Pizza Bean," its flavors a comforting embrace. 
"Chicken Fajita" tantalizes my taste buds with its spicy kick,
 a culinary adventure on every slice. "Chicken Tandoori" beckons with its
  aromatic spices, each bite a journey to culinary bliss.
  
  \t \t I really love pizza!`);
