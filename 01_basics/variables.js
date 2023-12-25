const accountId = 12121
let accountEmail = "deep@gmail.com"
var accountPassword = "12345"
accountCity = "Gandhinagar"
let accountState;

// accountId = 21212 // not allowed

accountEmail = "deepzz@gmail.com"
accountPassword = "1234567"
accountCity = "Surat"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* 
prefer not to use var
because of issue in block scope and functional scope
*/