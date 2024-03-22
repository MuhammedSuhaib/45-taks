//  Write a function called make_album()
function make_album(artist, title, tracks) {
    //  build a Object that describes a music album
    var album = {
        artisttt: artist,
        tttitle: title,
        tttracks: tracks
    };
    if (tracks !== undefined) {
        album.tttracks = tracks;
    }
    return album;
}
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2");
var album3 = make_album("Artist3", "Album3");
var album4 = make_album('Artist4', 'Album4', 4);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
