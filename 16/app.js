var GuestList2 = ['Subhan', 'Hannan', 'Rayyan'];
GuestList2.splice(2, 3, 'Umamima');
GuestList2.forEach(function (guest) { return console.log("Assalamu alaikum \"".concat(guest, "\",\nI hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM.")); });
console.log('\n I want to inform you all that I found a bigger dinner table so I m invitng some more guests \n');
GuestList2.unshift('Fatima');
GuestList2.splice(3, 0, 'Muntaha');
GuestList2.push('Hubaid');
GuestList2.forEach(function (guest) { return console.log("Assalamu alaikum \"".concat(guest, "\",\nI am inviting you to dinner on February 29, 2028, at 7:00 PM.")); });
