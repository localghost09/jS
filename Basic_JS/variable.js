const accountId = 144553
let accountEmail = "nikhilprataps66@gmail.com"

var accountPassword = "12345"

accountCity = "Jaipur"

// accountId = 2   not allowed
accountEmail = "adi@g.com"
accountPassword ="1213131"
accountCity = "Delhi"

let accountState;

/*
do not use var because there have a block scope
problem
*/

console.table([accountEmail,accountPassword, accountCity, accountState])