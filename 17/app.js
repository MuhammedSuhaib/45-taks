//  Start with your program from Exercise 16.
var GuestList2 = ['Subhan', 'Hannan', 'Rayyan'];
GuestList2.splice(2, 3, 'Umamima');
GuestList2.forEach(function (guest) { return console.log("Assalamu alaikum \"".concat(guest, "\",\nI hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM.")); });
console.log('\n I want to inform you all that I found a bigger dinner table so I m invitng some more guests \n');
GuestList2.unshift('Fatima');
GuestList2.splice(3, 0, 'Muntaha');
GuestList2.push('Hubaid');
GuestList2.forEach(function (guest) { return console.log("Assalamu alaikum \"".concat(guest, "\",\nI am inviting you to dinner on February 29, 2028, at 7:00 PM.")); });
// Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('\n  I m so sorry now  due to some reasons I can only Invite 2 guests \n');
//  • Remove guests from your list one at a time
//  until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (GuestList2.length > 2) {
    var removedGuests = GuestList2.pop();
    console.log("sorry \"".concat(removedGuests, "\" I cant invite you \n"));
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
GuestList2.forEach(function (lastTwo) { return console.log("\"".concat(lastTwo, "\" you are still invited")); });
GuestList2.splice(0, 2);
console.log(GuestList2);
