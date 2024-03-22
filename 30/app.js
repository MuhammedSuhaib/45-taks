var Visitors = ['Admin', 'Eric', 'Jason', 'Harry', 'Ron'];
Visitors.forEach(function (user) {
    if (user == 'Admin') {
        console.log("hello ".concat(user, ", would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(user, ", thank you for logging in again."));
    }
});
