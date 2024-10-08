//Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return (nr1+nr2+nr3+nr4)/4
    
}
console.log(averageOf4Numbers(2,3,4,5))
//export { averageOf4Numbers };

//Write a function named max5 that receives 5 numbers as parameters and returns the biggest one between them.

function max5(num1,num2,num3,num4,num5){
    return Math.max(num1,num2,num3,num4,num5)
};
console.log(max5(1,2,3,7,8))

//Write a function named minutesToHours that receives a number of minutes as parameter 
//and returns a number representing the same amount of time but in hours.

function minutesToHours(minutes){
   return (minutes/60)
}
console.log(minutesToHours(150))