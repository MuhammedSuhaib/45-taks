// Declare the function
function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "\"I love TypeScript.\""; }
    console.log("your shirt size is ".concat(size, ", and the msg printed on that is ").concat(text));
}
// call the function
make_shirt();
make_shirt('medium');
make_shirt('small', "\"Hello Kitty!\"");
