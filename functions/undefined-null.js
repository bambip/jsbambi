// Undefined for variable 
let name = 'Jenn'
console.log(name)


if (name === undefined) {
    console.log('please provide a name')
} else {
    console.log(name)

}

//Undefine for function variables

let square = function (num) {
    console.log(num)
}

let result = square()

console.log(result)


//Null as assigned value

let age = 27

age = null

console.log(age)