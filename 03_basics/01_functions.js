function addTwoNum(num1, num2){       //num1 & num2 are parameters
    console.log(num1+num2);
}

addTwoNum(5,2)      // 5 & 2 are arguments

function addTwoNumber(num1, num2){       //num1 & num2 are parameters
    return num1 + num2
}

const result = addTwoNumber(5,2)
// when u return the fuction then only u can store it in a variable
console.log("Result : ", result)

function loginUserMsg(username){   // can pass the value of username here itself , it will be it's minimum value never can be a empty  

    if(!username){    //when username is empty it will give true and if will run  , otherwise "useename === undefined"
        console.log("please enter username")
        return
    }

    return `${username} just logged in` 
}
// undefined or empty string is a false value

// console.log(loginUserMsg("Rajdeep"))
// console.log(loginUserMsg())

//************Shopping Cart************//

function calculateCartPrice(val1,val2,...num1){   //rest operator for infinite inputs
    return num1
}

console.log(200,400,500,2000)  //val1=200 val2=400 rest in num1

const user = {
    username: "rajdeep",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user);

const Arr = [200,400,100,300]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(Arr))
