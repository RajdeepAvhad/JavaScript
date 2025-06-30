let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023, 0, 23)    //months starts from 0
console,log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()

console.log(myTimeStamp);     //total time in ms ig
console.log(myCreatedDate.getTime());     

let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default', {
    weekday: "long";
})
