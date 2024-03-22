function sandwichItems(items:string[]) {
   console.log(`\n you ordered a sandwich that contains \n`);
   
    items.forEach(item => {
        console.log( item);
    });
    
    
}


// callback
let itemsArr : string[] = ['crispy potatos', 'a steak of roasted cauliflower' , 'fried shallots \n'];
sandwichItems(itemsArr);

let itemsArr2 : string[] = ['deviled egg filling', 'Mayo garlic spread' , 'with olive toping'];
sandwichItems(itemsArr2);

let itemsArr3 : string[] = ['peanut butter spread', 'a layer of Chocolaty biscuits ' , 'with a cherry on top'];
sandwichItems(itemsArr3);