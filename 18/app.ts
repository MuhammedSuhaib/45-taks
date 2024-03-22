// Seeing the World: Think of at least five places in the world you’d like to visit.
let original: String[]= [ 'China','Germany','Azad kashmir','Korea' , 'Japan']
// • Print your array in its original order.
console.log( 'original', original);
// • Print your array in alphabetical order without modifying the actual list.
let Apl: String[] = [...original].sort();

console.log('Alphabetical Order' , Apl);
// • Show that your array is still in its original order by printing it.
console.log('Still in original form' , original);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('In reverse Order' , Apl.reverse());
// • Show that your array is still in its original order by printing it again.
console.log('Still in original form' , original);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('No more in original form' ,original.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('back to its original order' ,original.reverse());
// Original to Alphabetical order
console.log('Original to Alphabetical order' ,original.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log( 'reverse alphabetical order',original.reverse());




