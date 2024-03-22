let GuestList: string[] = ['Subhan', 'Hannan', 'Rayyan'];
GuestList.forEach(guest => console.log(`Assalamu alaikum "${guest}",
I hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM.`));
let lostGuest: string = GuestList[2];
console.log(`\nI just heard that one of my guests, "${lostGuest}", can’t make the dinner. So, I've updated the list.\n`);
let GuestList2: string[] = ['Subhan', 'Hannan', 'Rayyan'];
GuestList2.splice(2,3, 'Umamima');
GuestList2.forEach(guest => console.log(`Assalamu alaikum "${guest}",
I hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM.`));
