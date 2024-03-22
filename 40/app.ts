//  Write a function called make_album()

function make_album(artist: string, title: string, tracks? : number) {
    //  build a Object that describes a music album
    let album: { artisttt: string, tttitle: string, tttracks?: number } = {
    artisttt : artist,
    tttitle : title,
    tttracks: tracks};

 

    if(tracks !== undefined){
        album.tttracks = tracks;
    }
       return album;
}


let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2");
let album3 = make_album("Artist3", "Album3");
let album4 =make_album('Artist4' , 'Album4' , 4)

console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);




