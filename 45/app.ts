// Write a function that stores information about a car in a Object. 
function carProps(manufacturer: string , modelName: string ,
     ...otherDetails:{[key: string]: any}[]) {
//  The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments

    let Details = {
        manufacturer,
        modelName, 
        ...Object.assign({}, ...otherDetails),
    }
    return Details;
}

// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.

let a = carProps('Suzuki' , 'Alto vxr',{color: 'Grey'}, {year: 2022} )
// Print the Object that’s returned to make sure all the information was stored correctly.
console.log(a);
