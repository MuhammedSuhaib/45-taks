// Declare the function

function  describe_city(City:string , country:string = `Pakistan`) {
    console.log(` ${City} is in ${country}`);
    }

    // call the function
describe_city( 'Karachi');
describe_city( 'Islamabad');
describe_city( 'Kabul ', 'Afghanistan');
