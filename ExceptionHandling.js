// let numberOne=20
// let numberTwo=10
//  try{
//  let result=numberOne/numberTwo

//  console.log("The result is "+result)
//  }
// catch(err)
// {
//     console.log("The problem is "+err)
// }

// finally
// {
// console.log("Hello from finally")
// }
// console.log("This code is without exception handling")



class CustomError extends Error
{
    constructor(message)
    {
        super(message)
        this.name='user defined Error'
    }
}


try
{
    let value=10

throw new CustomError("Hey this is custom Error created by user")
console.log(value)
}
catch(err)
{
    console.log(err.name)
}






