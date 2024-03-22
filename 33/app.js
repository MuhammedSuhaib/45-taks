var num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num.forEach(function (Number) {
    if (Number === 1) {
        console.log(Number + "st");
    }
    else if (Number === 2) {
        console.log(Number + "nd");
    }
    else if (Number === 3) {
        console.log(Number + "rd");
    }
    else {
        console.log(Number + "th");
    }
});
