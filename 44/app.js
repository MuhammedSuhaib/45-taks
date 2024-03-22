function sandwichItems(items) {
    console.log("\n you ordered a sandwich that contains \n");
    items.forEach(function (item) {
        console.log(item);
    });
}
// callback
var itemsArr = ['crispy potatos', 'a steak of roasted cauliflower', 'fried shallots \n'];
sandwichItems(itemsArr);
var itemsArr2 = ['deviled egg filling', 'Mayo garlic spread', 'with olive toping'];
sandwichItems(itemsArr2);
var itemsArr3 = ['peanut butter spread', 'a layer of Chocolaty biscuits ', 'with a cherry on top'];
sandwichItems(itemsArr3);
