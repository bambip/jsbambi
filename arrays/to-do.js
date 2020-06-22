// const notes = ['Note 1', 'Note 2', 'Note 3'] 

// console.log(notes.length) // determine length (property) for an array

// //Bracket notation / index in the array, number in the list starting with 0
// console.log(notes[0]) //grabbing first item

// console.log(notes[2])  //grabbing the 3rd item

// //Challenge

// const toDos = ['Studying', 'Laundry', 'Sheets', 'Walk the dog', 'Vaccuum']

// console.log( `You have ${toDos.length} to-dos!
// To do: ${toDos[0]}, ${toDos[toDos.length - 2]}`)

//Challenge!
const toDos = ['Studying', 'Laundry', 'Sheets', 'Walk the dog', 'Vaccuum']

toDos.splice(2, 1) // deleted the third item
toDos.push('Find a book to read') // add item at the end
toDos.shift() // delete first item


console.log( `You have ${toDos.length} to-dos!
To do: ${toDos[0]}, ${toDos[toDos.length - 2]}`)

console.log(toDos)


//LOOOOOOOOOPING - for each 




