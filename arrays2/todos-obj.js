toDos = [{
    name:  'Clean',
    completed: true,
}, {
    name: 'Read',
    completed: false,

}, {
    name: 'Study',
    completed: true,

}, {
    name: 'Feed Bambi',
    completed: true,

}, {
    name: 'Laundry',
    completed: false,

}]

const deleteToDo = function (toDos, toDoText) {
    const index = toDos.findIndex(function (toDo){
        return toDo.name.toLowerCase() === toDoText.toLowerCase()
    })

    if (index > -1) {
        toDos.splice(index, 1)
    }

}

// deleteToDo(toDos, 'laundry')

console.log(toDos)

console.log('--------------------------------')





const getThingsToDo = function (dos) {
    return dos.filter(function(item) {
        return item.completed === false
    })
}
   


console.log(getThingsToDo(toDos))
