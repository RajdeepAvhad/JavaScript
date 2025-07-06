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

console.log(loginUserMsg("Rajdeep"))
console.log(loginUserMsg())