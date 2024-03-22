let current_users: string[] = ['Subhan', 'Hannan', 'Rayyan', 'Irfan', 'Umair'];
let new_users: string[] = ['Umair', 'Irfan', 'Furqan', 'Rayyan', 'Azlan'];

let current = current_users.map( user => user.toLowerCase());


for (let i = 0; i < new_users.length; i++) {
  if (current.includes(new_users[i].toLowerCase())) {console.log(`Username "${new_users[i]}" is not available. Please enter a new username.`);
    
  }
    else(console.log(`Username "${new_users[i]}" is available.`))
}