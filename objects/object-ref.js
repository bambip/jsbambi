let myAccount = {
    name: 'User',
    expences: 0,
    income: 0,
}
// references the same account ^^let otherAccount = myAccount 


let addExpense = function (account, amount) {
    
    account.expences = account.expences + amount
    console.log(account)
}

addExpense(myAccount, 2.50)
console.log(myAccount)

// Challenge


addIncome = function (account, income) {
    account.income = account.income + income
}


resetAccount = function (account) {
    account.expences = 0,
    account.income = 0
}


getAccountSummary = function (account) {
    let balance = account.income - account.expences
    return `Account for ${account.name} has $${balance}. $${account.income} in income, $${account.expences} in expences.`
}

addIncome(myAccount, 2000)
addExpense(myAccount, 3.50)
addExpense(myAccount, 500)
console.log(getAccountSummary(myAccount))




