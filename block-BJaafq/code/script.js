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