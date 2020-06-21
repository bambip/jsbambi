let add = function (a, b, c) {
  return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

//Default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
  return 'Name: ' + name + ' - Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

//Challenge 

let getTip = function (total, tipPercent = .2) {
    //return 'Total - ' + total + ' Tip = ' + total * tipPercent
  let percent = tipPercent  * 100
  let tip = total * tipPercent
  return `A ${percent}% tip on $${total} would be $${tip}`
}

let tip = getTip(40, .25)
console.log(tip)



console.log("Andrew")


let name = 'Galina'
console.log(`I love ${name}`)
