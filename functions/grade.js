let score = function (studentScore, points = 20) {
  let percent = (studentScore / points) * 100
   let grade = '' 
  //if (percent <= 59) {
  //    return `You got a F (${percent}%)!`   
  //} else if (percent >=60 && percent<=69) {
 //     return `You got a D (${percent}%)!`
 // } else if (percent >=70 && percent<=79) {
//      return `You got a C (${percent}%)!`
 // } else if (percent >=80 && percent<=89) {
 //     return `You got a B (${percent}%)!` 
//  } else if (percent >=90) {
  //    return `You got an A (${percent}%)!`     
 // }
  
 if (percent >=90) {
     grade = 'A'
 } else if (percent >= 80) {
     grade = 'B'

} else if (percent >=70) {
     grade = 'C' 
} else if (percent >=60) {
    grade = 'D' 
} else if (percent >59) {
    grade = 'F'
}
 return  `You got a ${grade} (${percent}%)!`
}

let result = score (15)
console.log(result)

