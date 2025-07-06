// singleton

// object literals

const mySym = Symbol("key1") 

const JSuser = {
    name: "Raj",
    age: 19,
    location: "pune",
    isLoggedIn: false,
    lastLogin: ["mon","wed"]
}
// all keys treated as string

console.log(JSuser.age)
console.log(JSuser["age"])
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

JSuser.location = "mumbai"
// Object.freeze(JSuser)        //further changes will not happened

JSuser.greeting = function() {
    console.log("Hello JS user")
}

console.log(JSuser.greeting())

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greetingTwo());