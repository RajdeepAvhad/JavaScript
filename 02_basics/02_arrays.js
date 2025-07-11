const marvel_heros = ["thor","ironman","drstrange"]
const dc_heros = ["superman","batman","flash"]

marvel_heros.push(dc_heros)      // merge nahi hot
console.log(marvel_heros)

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros)

const all_new_heros = [...marvel_heros, ...dc_heros]     //spread operator
console.log(all_new_heros)

const another_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Raj"))
console.log(Array.from("Raj"))    //string converted into array

console.log(Array.from({name: "Raj"}))    
// here name is the key and raj is the value
// we have to tell the from which part to convert in array , key or value otherwise it will give empty array

let score1 = 100
let score2 = 300
let score3 = 300

console.log(Array.of(score1,score2,score3))

