// import { myFunction,demoFunction } from "./ES6Concepts";
// import { numberArray } from "./ES6Concepts";
// console.log(numberArray)


import { Observable } from "rxjs";
let numberArray=arr=>{return new Observable(
    subscriber=>{
        for(let value of arr)
        {
            subscriber.next(value)
        }
    }
)}


let numArr=[1,2,3,4,5,6]
const observable=numberArray(numArr)
observable.subscribe(value=>{console.log("1st "+value)})
observable.subscribe(value=>{console.log("2nd "+value)})