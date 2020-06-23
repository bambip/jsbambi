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



console.log(notes)


const index = notes.findIndex( function (note, index) {
    console.log(note)
    return note.title === 'Habbits to work on'
})

console.log(index)


// 's' = 's' but objects /= another object 