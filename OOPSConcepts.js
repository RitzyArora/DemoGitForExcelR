//Encapsulation
// class Vehicle
// {
//     constructor(vehicleType,modelName)
//     {
//         this.vehicleType=vehicleType
//         this.modelName=modelName
//     }
//     showDetails()
//     {
//         console.log(`The type of vehicle is ${this.vehicleType} and the model is ${this.modelName}`)
//     }

// }
// let vehicle=new Vehicle('Car','BMW')
// vehicle.showDetails()

//abstraction
// class Car
// {
//     constructor()
//     {
//         if(this.constructor==Car)
//         {
//             console.log("Abstract classes can't be instantiated")
//         }
//     }
//     showCarDetails()
//     {
//     //  console.log("No implementation")   
//     }
// }

// class Audi extends Car
// {
// showCarDetails()
// {
// console.log('The name of Car model is Audi')
// }
// }

// // let audi=new Audi()
// // audi.showCarDetails()
// let car=new Car()
// car.showCarDetails()

//inheritance

// class Employee
// {
// constructor(name,designation,salary)
// {
//     this.name=name
//     this.designation=designation
//     this.salary=salary
// }
// displayInfo()
// {
//     console.log("Hey Iam afunction in parent class")
// }
// }

// class Manager extends Employee
// {
//     constructor(name,designation,salary,id)
//     {
//         super(name,designation,salary)
//         this.id=id
//     }
// showDetails()
// {
//     console.log(`The name of Employee is ${this.name} Salary is ${this.salary} Designation is
//     ${this.designation} and id is ${this.id}`)
// }

// }

// let manager=new Manager('Ritika','Manager',500000,1)
// manager.showDetails()
// manager.displayInfo()


//prototype
// const arr=[1,2,3,4]
//console.log(arr)
// console.log(Object.getPrototypeOf(arr))
// let prototype=Object.getPrototypeOf(arr)
// console.log(Object.getPrototypeOf(prototype))

//polymorphism 
// class Shape
// {
//     area()
//     {
//         console.log("Area from Shape class")
//     }
// }

// class Rectangle extends Shape
// {
//     area()
//     {
//         console.log("Area of rectangle is "+(2*3))
//     }
// }
// class Square extends Rectangle
// {
//     area()
//     {
//         console.log("Area of Square is "+(2*2))
//     }
// }

// let shape=new Shape()
// let rectangle=new Rectangle()
// let square=new Square()
// shape.area()
// rectangle.area()
// square.area()

class Shape
{
    area(valueOne,valueTwo)
    {
        console.log(valueOne*valueTwo)
    }
}

class Rectangle extends Shape
{
    area(valueOne,valueTwo)
    {
        super.area(valueOne,valueTwo)
        
    }
}

let rectangle=new Rectangle()
rectangle.area(2,3)











