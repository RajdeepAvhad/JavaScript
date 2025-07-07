// Immediately Invoked Function Expression (IIFE)

// to avoid the pollution from global scope

function chai(){
    console.log(`Hello`)
}

chai();  // this how we normally call

//to call the function directly(implicitly) just wrap the function in () and add another () just like chai()

( function chai2(){
    console.log(`Hello`)
} )();

//two iife will not run until u end the last function with ; 

// Arrow implicit function
( (name) => {
    console.log(`DB CONNECTED TO ${name}`)
})(`Raju`)
// raju parameter , name argument