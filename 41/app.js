var Magicians = ['David copperfield', 'David Blaine', 'Shin lim'];
function show_magicians(magiciansArr) {
    magiciansArr.forEach(function (singleMagicianNames) {
        console.log(singleMagicianNames);
    });
}
// callback
show_magicians(Magicians);
