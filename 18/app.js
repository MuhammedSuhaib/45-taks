var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Seeing the World: Think of at least five places in the world you’d like to visit.
var original = ['China', 'Germany', 'Azad kashmir', 'Korea', 'Japan'];
// • Print your array in its original order.
console.log('original', original);
// • Print your array in alphabetical order without modifying the actual list.
var Apl = __spreadArray([], original, true).sort();
console.log('Alphabetical Order', Apl);
// • Show that your array is still in its original order by printing it.
console.log('Still in original form', original);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log('In reverse Order', Apl.reverse());
// • Show that your array is still in its original order by printing it again.
console.log('Still in original form', original);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log('No more in original form', original.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('back to its original order', original.reverse());
// Original to Alphabetical order
console.log('Original to Alphabetical order', original.sort());
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log('reverse alphabetical order', original.reverse());
