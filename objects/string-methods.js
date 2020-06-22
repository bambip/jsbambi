let name = 'Galina Slater'

// Length property
console.log(name.length)


// Convert to upper case

console.log(name.toUpperCase())


//convert to lower case
console.log(name.toLowerCase())

//Includes method

let password = 'abc123password978'

console.log(password.includes('password'))


//Trim
console.log(name.trim())

//Challenge


let isValidPassword = function (password) {
   return password.length > 8 && !password.includes('password')
}
/*    if (password.length > 8 && !password.includes('password')) { 
    return true
} else {
    return false
}
}*/



console.log(isValidPassword('aspfg'))
console.log(isValidPassword('dkcdkmvnddsmckdiscn'))
console.log(isValidPassword('dkmkcpassword'))

