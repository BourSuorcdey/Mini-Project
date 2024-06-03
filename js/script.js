let student = {
    name: "sala",
    age: 23,
    address: {
        city: "New Yok",
        Country: "USA"
    }
}

let {name, age, address: {city, Country}} = student;
console.log(name, age, city, Country);

//nullish 
let a = null;
a ??= "a is null value";
console.log(a);

//nullish 
let b = null;
let result = a ?? "a is null value";
console.log(a);

//logical OR (||) work with all of falsy value
let data = "";
data ||= "No data in collaction"
console.log(data)

//logical OR (||) work with all of falsy value
let data1;
console.log(data1 || "No data in collaction")


// The optional chaining '?.' is an error-proof way to access nested object properties, even if an intermediate property doesn't exist.
let product = {
    name: 'iPhone',
    price: 1000,
    details: {
        model: 'XS',
        color: 'Gold'
    }
}
console.log(product.details.color)

let product2 = {
    name: 'iPhone',
    price: 1000,
    details: null
}
// console.log(product2.details.color) // TypeError: Cannot read property 'color' of null
console.log(product2?.details?.color || "No color specified")


let product3 = {
    name: 'iPhone',
    price: 1000,
    details: {
        make: ""
    }
}
// console.log(product2.details.color) // TypeError: Cannot read property 'color' of null
console.log(product3.name, product3.price, product3?.details?.make || "No color specified")
