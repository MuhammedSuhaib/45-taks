let Magicians: string[] = ['David copperfield' , 'David Blaine' ,'Shin lim'];

function show_magicians(magiciansArr :string[]) {
    magiciansArr.forEach(singleMagicianNames => {
console.log(singleMagicianNames);
        
    });
    
}

// Addding THE GREAT

function make_great(magiciansArr :string[]) {
    
    magiciansArr.forEach(singleMagicianNames => {
        console.log('THE GREAT '+ singleMagicianNames);
                
            });
}

// callback

show_magicians(Magicians)

make_great(Magicians)
