let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
  return {
      summary: `${book.title} by ${book.author}`,
      pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  }
  //console.log(`${book.title} by ${book.author}`)
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area


let conversionFarenheight = function (farenheight) {
    return {
        farenheight: farenheight,
        kelvin: (farenheight + 459.67) * (5 / 9),
        celsius: (farenheight - 32) * (5 / 9)
    }
}

let temps = conversionFarenheight(50)
console.log(temps)
