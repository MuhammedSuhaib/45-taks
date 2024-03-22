var current_users = ['Subhan', 'Hannan', 'Rayyan', 'Irfan', 'Umair'];
var new_users = ['Umair', 'Irfan', 'Furqan', 'Rayyan', 'Azlan'];
var current = current_users.map(function (user) { return user.toLowerCase(); });
for (var i = 0; i < new_users.length; i++) {
    if (current.includes(new_users[i].toLowerCase())) {
        console.log("Username \"".concat(new_users[i], "\" is not available. Please enter a new username."));
    }
    else
        (console.log("Username \"".concat(new_users[i], "\" is available.")));
}
