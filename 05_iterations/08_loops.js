// reduce

const myNums = [1,2,3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

// initial value of accumalator(acc) is zero - see at the end
// current value(currval) is nothing but values from array
// while going futher acc will store its sum in place of 0

const myTotal2 = myNums.reduce( (acc,curr) => acc+curr, 0)

console.log(`sum: ${myTotal}`)
console.log(`sum2: ${myTotal2}`)

const shoppingCart = [
    {
        itemname: "js course",
        price: 200
    },
    {
        itemname: "cpp course",
        price: 600
    },
    {
        itemname: "java course",
        price: 500
    },
    {
        itemname: "c course",
        price: 400
    }
]

const shoptotal = shoppingCart.reduce( (acc,item) => (acc+item.price) , 0)
console.log(shoptotal)