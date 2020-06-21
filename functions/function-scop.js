//Global scope (convertFarenheightToCelsuis, Celsius, Celsuis2)
  //Local Scope (result, Farenheight)
    // Local scope (isFreezing)

let convertFarenheightToCelsius = function (Farenheight) {
    let result = (Farenheight - 32) * 5 /9
    return result

    if (result <= 0) {
        let isFreezing = true
    }
}

let Celsius = convertFarenheightToCelsius(32)
let Celsius2 = convertFarenheightToCelsius(68)

console.log(Celsius)
console.log(Celsius2)