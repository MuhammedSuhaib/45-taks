// Declare the function
function describe_city(City, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(" ".concat(City, " is in ").concat(country));
}
// call the function
describe_city('Karachi');
describe_city('Islamabad');
describe_city('Kabul ', 'Afghanistan');
