var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Write a function that stores information about a car in a Object. 
function carProps(manufacturer, modelName) {
    //  The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments
    var otherDetails = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherDetails[_i - 2] = arguments[_i];
    }
    var Details = __assign({ manufacturer: manufacturer, modelName: modelName }, Object.assign.apply(Object, __spreadArray([{}], otherDetails, false)));
    return Details;
}
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
var a = carProps('Suzuki', 'Alto vxr', { color: 'Grey' }, { year: 2022 });
console.log(a);
