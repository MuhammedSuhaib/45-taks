let Visitors = ['Admin', 'Eric', 'Jason', 'Harry', 'Ron'];
Visitors .forEach(user  => {if (user == 'Admin') {console.log(`hello ${user}, would you like to see a status report?`);
    } else {console.log(`hello ${user}, thank you for logging in again.`);}});
