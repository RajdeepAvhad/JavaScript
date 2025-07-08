// for of loop

/* sytax

for (const element of object) {
    
}

*/

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello"

for (const greet of greetings) {
    console.log(`each char is ${greet}`)
}

//Maps
// no duplicate values and same order

const map = new Map()           //map is a oobject
map.set('IN' , "India")
map.set('UK' , "United Kingdom")
map.set('Fr' , "France")
map.set('IN' , "India")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value)
}

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }
// object is not iterable

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }