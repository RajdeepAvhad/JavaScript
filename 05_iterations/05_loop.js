// for each loop

const coding = ["js", "ruby", "java", "python", "cpp"]

//1st way
coding.forEach( function (val){
    console.log(val);
} )
// remove the storing function name

//2nd way
coding.forEach( (item) => {
    console.log(item);
})

//3rd way
function printMe(item){
    console.log(item);
}
//item will give the items of the array
//index will give u indexes
//arr will give u whole array
//add " , " to use multiple

coding.forEach(printMe)

//for each loop for object array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )