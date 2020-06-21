let temp = 65


//logical and operator

//&& = and true if BOTH sides are true


if(temp >=60 && temp <=90) {
    console.log('It is pretty nice out!')
}


// || = or as long as at least one is true. false otherwise


if (temp >=120 || temp <= 0) {
    console.log('Dont go outside!')
}

//challenge


let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Offer only vegan')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan options') 
} else {
    console.log('Serve anything')
}

