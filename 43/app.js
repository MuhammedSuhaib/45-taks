var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Magicians = ['David copperfield', 'David Blaine', 'Shin lim'];
function show_magicians(magiciansArr) {
    magiciansArr.forEach(function (singleMagicianNames) {
        console.log(singleMagicianNames);
    });
}
// Addding THE GREAT
function make_great(magiciansArr) {
    magiciansArr.forEach(function (singleMagicianNames) {
        console.log('THE GREAT ' + singleMagicianNames);
    });
}
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function Copy(copy) {
    return __spreadArray([], copy, true);
}
// callback
var clone = Copy(Magicians);
console.log('\n (original)show_magicians \n');
show_magicians(Magicians);
console.log('\n (clone)make_great \n');
make_great(clone);
