//function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome User')
}

greetUser()  //- calling the function


let square = function (num) {
  let result = num * num
  return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)


//Challenge 

let convertFarenheightToCelsius = function (Farenheight) {
    let result = (Farenheight - 32) * 5 /9
    return result
}

let Celsius = convertFarenheightToCelsius(32)
let Celsius2 = convertFarenheightToCelsius(68)

console.log(Celsius)
console.log(Celsius2)