//Arrow function does not include this keyword

const user = {
    username: "Rajdeep",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`)
        // this refers current context means the current scope
    }

}

user.welcomeMessage()

function chai(){

    username: "Raj"
    console.log(this)
    console.log(this.username)    //can't use this in functions only in objects
}

// chai()



// Arrow function 

const chai2 = () => {

    username: "Raj"
    console.log(this)
    console.log(this.username)   //undefined
    console.log(this)   //{}
}

// chai2()

const addTwo = (num1,num2) => {
    return num1 + num2
}

// Implicit return  ( remove curly braces and return word)
const addTwo = (num1,num2) => num1 + num2

const addTwo = (num1,num2) => (num1 + num2)
// {} means have to write return and () means no return
// V.imp for react

const addTwo = (num1,num2) => ({username: "Rajdeep"})
// to return the object we have to use {}

console.log(addTwo(3,4))
