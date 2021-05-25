function fullName(firstName = "", lastName = ""){
    return (`${firstName} ${lastName}`)
}

let result = fullName("John","Snow");

let expected = "Johnsnow";

let expectedOf = "John"

if(result !== expected){
    throw new Error(`${result} is not equal to ${expected}`);
}

if(result !== expectedOf){
    throw new Error(`${result} is not equal to ${expectedOf}`)
}


function calculateTotalAmount(amount = 0, taxRate = 0){
    return amount + (amount * taxRate) 
}

let output = calculateTotalAmount(34,45);

let firstResult = 1567;

let SecondResult = 1466;

if(output !== firstResult){
    throw new Error(`${output} is not equal to ${firstResult}`)
}

if(output !== SecondResult){
    throw new Error(`${output} is not equal to ${SecondResult}`)
}