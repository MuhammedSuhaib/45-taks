GuestList = ["Subhan", "Hannan", "Rayyan"]
for each_guest in GuestList:
    print(
        f''' Assalamu alaikum  "{each_guest}" 
"I hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM."'''
    )

lostGuest = GuestList[2]
print(f'''\nI just heard that one of my guests, "{lostGuest}", can’t make the dinner. So, I've updated the list.\n`''')

GuestList.insert(2,'Umamima')
GuestList.pop()
print('GuestList2: ', GuestList)

for each_guest in GuestList:
    print(
        f''' Assalamu alaikum  "{each_guest}" 
"I hope this message finds you well. I am pleased to invite you to dinner on February 29, 2028, at 7:00 PM."'''
    )