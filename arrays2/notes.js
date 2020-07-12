const notes = [ {
    title: 'Note 1',
    body: 'Tokyo'
}, {
    title: 'Note 2',
    body: 'France'
}, {
    title: 'Note 3',
    body: 'India'
}] // objects


notes.push('My new note')
console.log(notes.pop())

console.log(notes.length)

//console.log(notes[notes.length-1]) // grabbing item by index

//console.log(notes.shift())
console.log(notes)


//Looping for each item
notes.forEach(function (item, index) {  //for each item in notes function will repeat
    console.log(index)
    console.log(item)
})

//looping as many as needed
for (let count = 0; count <=2; count++) {
    console.log(count)
}

for (let count=0; count < notes.length; count++) {
    console.log(notes[count]); // pull each item by item's index which is the same as count
}

const index = notes.findIndex(function (note, index) {
    console.log(note) 
    return note.title === 'Note 2'
})
console.log(index)



// Finding a note by title even with different cases!!!!

const findNote = function (notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}
// const findNote = function (notes, noteTitle) {
//      const index = notes.findIndex(function (note, index) {
//          return note.title.toLowerCase() === noteTitle.toLowerCase()
//      })
//     return notes[index]
//  }

const note = findNote(notes, 'Note 3')
console.log(note)

// const findNotes = function (notes, query) {
//     return notes.filter(function (note, index){ //true boolean will return an item for a new created array 
//         const  isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
//         return isTitleMatch || isBodyMatch
//     })
// }

// console.log(findNotes (notes, 'India'))

// const filteredNotes = notes.filter(function (note, index){ //true boolean will return an item for a new created array 
//     const isTitleMatch = note.title.toLowerCase().includes('an')
//     const isBodyMatch = note.body.toLowerCase().includes('an')
//     return isTitleMatch || isBodyMatch
// })




console.log(filteredNotes)

console.log('----------------------')

console.log(getThingsToDo(toDos))