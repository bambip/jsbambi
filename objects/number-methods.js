let num = 501.054
//trims to neccessary decimals
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//creating a random number without decimal and min and max

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max-min + 1))
// 0 - .999999
console.log(randomNum)


// Challenge

max = 1
min = 5
let trueNum = Math.floor(Math.random() * (max - min + 1)) + min

makeGuess = function (guess) {
    return trueNum === guess
}
console.log(makeGuess(3))