let mybook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: '326'
}
//getting single value of the object (properties)
console.log(`${mybook.title} by ${mybook.author}`)

mybook.title = 'Animal Farm'

console.log(`${mybook.title} by ${mybook.author}`)

// Challenge

let: person = {
    name: 'Matthew',
    age: 21,
    location: 'Kansas City'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`) 

person.age = person.age + 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`) 



 