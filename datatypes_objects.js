// datatype tells which kind of value a variable can hold
// primitive -> immutable 
// string, number, boolean, null, undefined, symbol, bigint 

// non-primitive -> mutable
// object, array, function



// objects 

const person = {
    name : "Bidhanshu", 
    age : 22,
    address : {
        city : "Bangalore",
        state : "Karnataka"
    }
}

console.log(person.name) // Bidhanshu
person.address.city = "Patna"
console.log(person.address.city) // Patna
person.address.state = "Bihar"
console.log(person.address.state) // Bihar

person.gender = "Male" // adding new property to the object
// console.log(person.gender) // Male

// to get all the keys of the object
console.log(Object.keys(person))

// to get all the values of the object
console.log(Object.values(person))

// to get all the key : value pair in array form
console.log(Object.entries(person))