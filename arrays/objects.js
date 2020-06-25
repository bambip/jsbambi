const notes = [{}, {
    title: 'My next Trip',
    body: 'I would like to go to Colorado'
}, {
    title: 'Habbits to work on',
    body: 'mindful eating'
}, {
    title: 'characteristics of me',
    body: 'loving, caring, fearless'

}]



// console.log(notes)


// const index = notes.findIndex( function (note, index) {
//     console.log(note)
//     return note.title === 'Habbits to work on'
// })

// console.log(index)


// // 's' = 's' but objects /= another object 


const findNote = function(notes, noteTitle) {
   const index = notes.findIndex(function(note, index) {
       return note.title === noteTitle
    })
     return notes[index]
 }


const note = findNote(notes, 'characteristics of me')
console.log(note)