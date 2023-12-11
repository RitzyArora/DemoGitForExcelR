//spread operator
// let firstArrayValues=[2,3,8,9]
// let secondArrayValues=[1,5,6]
// console.log(Math.max(...firstArrayValues,...secondArrayValues))

//rest operator

// function restOperatorUsage(name,...firstArrayValues)
// {

// console.log(name+" "+firstArrayValues[3])
// }

// restOperatorUsage('hi',1,2,3,4)



//getters and setters


// const student=
// {
//     firstName:'Rashi',
//     lastName:'Sharma',
//     age:12,
//     get studentDetails()
//     {
// return `${this.firstName} ${this.lastName} ${this.age}`
//     },

//     set studentDetails(value)
//     {
// const properDetails=value.split(" ")
// this.firstName=properDetails[0]
// this.lastName=properDetails[1]
// this.age=properDetails[2]
//     }
// }


// console.log(student.studentDetails)
// student.studentDetails='Gaurav verma 15'
// console.log(student.studentDetails)




//closure
//let valueOne=25

// function closureDemo()
// {
//     let valueTwo=36
//     function innerClosureDemo()
//     {
//         valueTwo+=2
//         valueOne+=2
//         valueThree=99
//         console.log(valueOne)
//         console.log(valueTwo)
//         console.log(valueThree)
//     }
//     valueTwo++
//     console.log(valueTwo)
//     return innerClosureDemo;
// }

// // let demo=closureDemo()
// // demo()
// closureDemo()()




// 'use strict';
// value=10
// console.log(value)

// 'use strict';
// function anyFunc(v1,v1){}


// function myStrictFunction() {
//   // Function-level strict mode syntax
//   "use strict";
//   function nested() {
//     return "And so am I!";
//   }
//   return `Hi! I'm a strict mode function! ${nested()}`;
// }
// function myNotStrictFunction() {
//   return "I'm not strict.";
// }

// console.log(myStrictFunction())
//myNotStrictFunction()



// export let numberArray=[1,2,3,4]
// export const PI=3.14
// export class Hello
// {
//     constructor(msg)
//     {
//         this.msg=msg
//     }
// }

//  function greeting()
// {
//     console.log("Good evening")
// }

// function myFunction()
// {
//     console.log("Hi from my function")
// }

// function demoFunction()
// {
//     console.log("Hi from Demo function")
// }

// export{myFunction,demoFunction} 



//callbacks

// function checkingEvenNumbers(num)
// {
// return num%2==0
// }

// function filteringEvenNumbers(numbers,callbackFn)
// {
//     let numberArray=[]
//     for(let value of numbers)
//     {
//         if(callbackFn(value))
//         numberArray.push(value)
//     }
//     return numberArray
// }

// let numberArray=[22,54,60,89,77,142,356,555]
// console.log(filteringEvenNumbers(numberArray,checkingEvenNumbers))

//promises
// let promise=new Promise((resolve,reject)=>
// {
//     let valueOne=2
//     let valueTwo=30
//     if(valueOne%5===0&&valueTwo%5===0)
//     resolve();
// else
// reject();

// })

// promise.then(()=>{console.log("Success promise is fulfilled")},()=>{console.log("Rejected")})
// // .catch(()=>{console.log("Promise is rejected")})


//async await

// const asyncDemo=async ()=>
// {
//     let text=await "Hi from async function"
//     console.log(text)
// }

// //asyncDemo().then((value)=>{console.log(value)})
// console.log('Hello')
// asyncDemo()
// console.log('Bye')


//call
// function student(name,age)
// {
// this.name=name
// this.age=age
// }


// function setStudent()
// {
//     student.call(this,'Ram',12)
//     console.log('Student details are ',this)
// }

// const studentOne=new setStudent()


//apply
// function student(firstName,lastName)
// {
// this.firstNamen=firstName
// this.lastName=lastName
// }


// function setStudent(age)
// {
//     student.apply(this,['Ram','Kumar'])
//     this.age=age
//     console.log('Student details are ',this)
// }

// const studentOne=new setStudent(12)


//bind
let bookObj={
    bookName:'Alice in wonderland'
}

let publisherDetails={
    name:"Abc",
    printingBookName:function()
    {
console.log(this.bookName)
    }
}

let bindDemo=publisherDetails.printingBookName.bind(bookObj)
bindDemo()





























