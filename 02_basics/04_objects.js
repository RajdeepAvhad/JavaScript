const tinderUser1 = new Object()      //singleton object declaration

const tinderUser = {}         //Non-singleton object declaration

tinderUser.id = "123abc"
tinderUser.name = "Raj"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email: "raju@gmail.com",
    fullname: {
        userfullname: {
            firstname: "raj",
            lastname: "avhad"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

console.log(regularUser.fullname?.userfullname.firstname)   
//optional chaining fullname exist or not in api

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj4 = {5:"a" , 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({} , obj1 , obj2 , obj4)

const obj3 = {...obj1, ...obj2}
// most of the time this will used not the other 2

console.log(obj3)

const users = [
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:3,
        email:"b@gmail.com"
    }
]

// when values comes from database it will be in the form of array of objects

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
// treating object as array u can run diff operations on this as array

console.log(tinderUser.hasOwnProperty('id'))
// have or not

