const myNum = [1,2,3,4,5,7,8,9,10]

const newNum = myNum.map( (num) => num+10 )
console.log(newNum);

const newNum2 = myNum
                .map( (num) => num*10)
                .map( (num) => num+1)
// double iteration

console.log(newNum2)
