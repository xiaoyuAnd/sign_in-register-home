const fs = require('fs')
const usersString = fs.readFileSync('./db/users.json').toString()
const usersArray = JSON.parse(usersString)
console.log(typeof usersString);
console.log(usersString);
console.log(usersArray instanceof Array);
console.log(usersArray);


const user3 = { "id": 3, "name": "kuikui", "password": "www" }
usersArray.push(user3)
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)