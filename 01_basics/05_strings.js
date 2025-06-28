const name = "Rajdeep"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rajdeep')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
// console.log(gameName.indexOf(r))

const newString = gameName.substring(0,4)
console.log(newString)
//last include nahi hot

const anotherString = gameName.slice(-5,4)
console.log(anotherString)

//  .trim()  feature removes all the extra spaces

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=11"

console.log(url.replace('youtube','tiktok'))

console.log(url.includes('sundar'))

console.log(gameName.split)

// checkout all other functions for string
