const notes = ['Note 1', 'Note 2', 'Note 3'] // array

notes.push('My new note')
console.log(notes.pop())

console.log(notes.length)

//console.log(notes[notes.length-1]) // grabbing item by index

//console.log(notes.shift())
console.log(notes)



notes.forEach(function (item, index) {  //for each item in notes function will repeat
    console.log(index)
    console.log(item)
})

