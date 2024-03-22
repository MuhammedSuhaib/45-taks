let Magicians: string[] = ['David copperfield' , 'David Blaine' ,'Shin lim'];

function show_magicians(magiciansArr :string[]) {
    magiciansArr.forEach(singleMagicianNames => {
console.log(singleMagicianNames);
        
    });
    
}


// callback

show_magicians(Magicians)