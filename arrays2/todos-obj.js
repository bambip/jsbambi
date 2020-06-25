toDos = [ {
    name:  'Clean',
    completed: true,
},{
    name: 'Read',
    completed: false,

},{
    name: 'Study',
    completed: true,

},{
    name: 'Feed Bambi',
    completed: true,

},{
    name: 'Laundry',
    completed: false,

} ]

const deleteToDo = function (todos, theName) {
     const index = todos.findIndex(function (todo){
         return todo.name.toLowerCase() === theName.toLowerCase()
     }) 
     if (index > -1) {
         todos.splice(index)
     }
}

deleteToDo(toDos, 'Clean')

console.log(toDos)