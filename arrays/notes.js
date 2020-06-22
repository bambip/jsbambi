const notes = ['Note 1', 'Note 2', 'Note 3']


// console.log(notes.pop ()) // removes last item & prints it
// notes.push('My new Note') // adds new item at the end


// console.log(notes.shift()) //remove first 

// notes.unshift(notes.unshift('My first Note')) //add first

//start at X index and remove Y items:

notes.splice(1, 1)


//replace 2nd item 
//(1, 1 - replaces)
notes.splice(1, 0, 'Its the new 2nd item')

notes[2] = 'This is now the new note 3' // another way to swap out

console.log(notes.length)
console.log(notes)