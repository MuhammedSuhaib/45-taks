var GuestList = ['Subhan', 'Hannan', 'Rayyan'];
GuestList.forEach(function (guest) { return console.log("Assalamu alaikum \"".concat(guest, "\",\nI hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM.")); });
var lostGuest = GuestList[2];
console.log("\nI just heard that one of my guests, \"".concat(lostGuest, "\", can\u2019t make the dinner. So, I've updated the list.\n"));
var GuestList2 = ['Subhan', 'Hannan', 'Rayyan'];
GuestList2.splice(2, 3, 'Umamima');
GuestList2.forEach(function (guest) { return console.log("Assalamu alaikum \"".concat(guest, "\",\nI hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM.")); });
