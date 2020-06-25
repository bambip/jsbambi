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








//LOOPING - For each (function for function - callback function)




notes.forEach (function (item, index) {
    console.log(index)
    console.log(item)

})
   


console.log(notes.length)
console.log(notes)


//initializer(initial count ex. 1), condition (how logn loop runs)
//, final expression (++ = +1)

for (let count = 0; count <= 2; count ++) {
    console.log(count)
}


//grabbed each itesm from the array 

//to start from end notes.length - 1; to stop count)
for (let count = 0; count < notes.length; count ++) {
    console.log(notes[count])
}

//Position of an item: ( -1 nowhere in the array) indexOf

console.log(notes.indexOf('This is now the new note 3'))

