// function productOfTwoNumbers(numberOne,numberTwo)
// {
//     let result=numberOne*numberTwo
//     //console.log(`Product of ${numberOne} and ${numberTwo} is ${result}`)
//     return result
// }

// let value=productOfTwoNumbers(40,50)
// console.log("Product is "+value)


//setTimeout
// setTimeout(function(){
//     console.log("Hello World");
// }, 5000);
// console.log('We are learning about functions')

//clearTimeout

// const timeOutId=setTimeout(function(){
//     console.log("Hello World");
// }, 5000);
// console.log('We are learning about functions')

// clearTimeout(timeOutId)
// console.log(`Time out id ${timeOutId} is cleared`)

//setInterval()
// setInterval(function(){
//     console.log("Hello from setInterval Function")
// },3000)

//clearInterval()

// let intervalId=setInterval(function(){
//     console.log("Hello from setInterval Function")
// },3000)
// clearInterval(intervalId)
// console.log(`Set Interval id ${intervalId} is clear `)


//function Expression with named function

// let fact=function factorial(value)
// {
// let result=1
// for(let i=1;i<=value;i++)
// {
// result=result*i
// }
// return result
// }



// console.log(fact(5))



//function Expression with Anonymous function


// let fact=function(value)
// {
// let result=1
// for(let i=1;i<=value;i++)
// {
// result=result*i
// }
// return result
// }



// console.log(fact(5))

//Arrow functions
// const sumOfFirstTenNumbers=()=>
// {
//     let sum=0
//     let value=10
//     while(value>0)
//     {
//         sum+=value
//         value--
//     }
//     console.log(sum)
// }

// sumOfFirstTenNumbers()
//Arrow function with default parameters

// const arrowFuncWithDefaultParameter=(num1,num2,num3=90)=>
// {
// let result=num1+num2+num3
// console.log(result)
// }

// arrowFuncWithDefaultParameter(6,4,5)

//single line arrow function

// const addTen=(a)=>console.log(a+10)

// addTen(5)

//IIFE
// (function(){console.log('Hello from IIFE')})();
//IIFE with parameters
// (function(name)
// {console.log('Hello from IIFE '+name)
// })('Shyam')

//generator function

// function* names()
// {
//     yield 'Ram'
//     yield 'shyam'
//     yield 'sita'
// }

//let callGen=names()
// for(const item of callGen)
// console.log(item)
// console.log(callGen.next().value)
// console.log(callGen.next().value)
// console.log(callGen.next().value)

//yield*

// const numberArray=[1,2,3,4]
// function* names()
// {
//     yield 'Ram'
//     yield* numberArray
//     yield 'Shyam'

// }
// for(let item of names())
// console.log(item)

//higher order function

// function greetingFunc()
// {
//     console.log("Welcome to higher order functions concepts")
// }

// function higherOrderFunc(greetingFunc)
// {
//     console.log("Hello from higher order function")
//     greetingFunc()
// }


// higherOrderFunc(greetingFunc)


// function greetingFunc()
// {
//     console.log("Iam from greetingFunction")
// }

// function higherOrderFunc()
// {
//     //console.log("Iam from Higher order function")
//     return greetingFunc()
// }

// higherOrderFunc()


//built in hof 
//map

// let numberArray=[1,2,3,4]
// let result=numberArray.map((num)=>num*10)
// console.log(numberArray)
// console.log(result)

//filter
// let numberArray=[1,2,3,4,5,6]
// let result=numberArray.filter((num)=>num<4)
// console.log(result)
// console.log(numberArray)

//reduce
let numberArray=[1,2,3,4]

let result=numberArray.reduce((value,prod)=>{
    return value*prod
},1)

console.log(result)











































