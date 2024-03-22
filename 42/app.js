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
// callback
show_magicians(Magicians);
make_great(Magicians);
