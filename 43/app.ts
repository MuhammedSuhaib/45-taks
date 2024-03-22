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
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 


function Copy(copy:string[]) {
    return [...copy]
    
}




// Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let clone = Copy(Magicians)

console.log('\n (original)show_magicians \n');
show_magicians(Magicians)

console.log('\n (clone)make_great \n');
make_great(clone)
