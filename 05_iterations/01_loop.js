// For loop

/* Syntax
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}

for (let i = 1; i <= 10; i++) {
    console.log(`*`);
   for (let j = 1; j <= 10; j++) {
    console.log(`#`);
   }
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


