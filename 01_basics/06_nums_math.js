const score = 400
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))  //for precision value

const num2 = 23.8966
console.log(num2.toPrecision(3)) //round off

const num3 = 1000000
console.log(num3.toLocaleString('en-IN'));

// **************** Math ******************//

console.log(Math)      //object
console.log(Math.abs(-4))
console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.min(4,6,9,2))
console.log(Math.max(4,6,9,2))


console.log(Math.random())
console.log((Math.random()*10)+1)

const min = 10
const min = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)



