let numArray=[1,2,3,4]
let stringArray=new Array('Hello','Hi','Bye')
let valueArray=Array.of(5,6,7,8,9)
// console.log(typeof(valueArray))

// console.log(valueArray[0])

// for (const iterator of valueArray) {
//     console.log(iterator)
// }
//console.log(stringArray[stringArray.length-1])
//let sumArray=numArray.reduce(summation)
//numArray.forEach(summation)
// function summation(total,item)
// {
// return total+item
// }
// console.log(sumArray)





// stringArray.push("Javascript")

// stringArray.unshift("Java")


//console.log(stringArray.pop())
// stringArray.pop()
// for (const iterator of stringArray) {
//     console.log(iterator)
// }


// let numArray2=numArray.slice(1,2)
// for (const iterator of numArray) {
//         console.log(iterator)
//     }

// let thirdArray=numArray.concat(valueArray)
// for (const iterator of thirdArray) {
//     console.log(iterator)
// }


let numberArray=[6,2,5,7,8,9]
//numberArray.sort()
//numberArray.reverse()

// numberArray.splice(3,1,10,11,12)
// for (const iterator of numberArray) {
//     console.log(iterator)
// }
// let mapArray=numberArray.map(multiplicationByTen)
// function multiplicationByTen(value)
// {
// return value*10
// }
// console.log(mapArray)

// let filterArray=numberArray.filter(greaterThan6)
let findArray=numberArray.find(greaterThan6)
function greaterThan6(value)
{
return value>6
}
// console.log(filterArray)
console.log(findArray)


