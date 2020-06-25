toDos = ['Clean', 'Read', 'Study', 'Feed Bambi', 'Laundry']

/* CHALLENGE
toDos.pop()  // removes last item
toDos.splice(2) // remove 3rd item in list (index2)
toDos.push('Practice gratitude') //adds item to the end
toDos.shift() // removes 1st item
*/






//You have 5 toDos today!
//Clean, Feed Bambi


console.log(`You have ${toDos.length} toDos today!`)
//console.log(`To do: ${toDos[0]}, ${toDos[toDos.length-2]}`) 
// console.log(toDos)


/*CHALLENGE*/

toDos.forEach(function (item, index) {
    console.log(`${index + 1}. ${item}`)
})

