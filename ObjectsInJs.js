let student={
    studentName:'Shyam',
    age:12,
    displayInformation:function(){
        console.log("The name of student is "+student.studentName+" and age of the student is "+student.age)
    
    },
    marks:{
        English:22,
        Maths:33
    }
}


// let studentClone=student
// //console.log(studentClone)
// studentClone.studentName='Ram'
// console.log(student)
// console.log("---------------------------------------------")
// console.log(studentClone)

//object.assign

// let studentClone=Object.assign({},student)
// console.log(studentClone)
//spread Operator
// let studentClone={...student}
// console.log(studentClone)
//Json.parse
// let studentClone=JSON.parse(JSON.stringify(student))
// studentClone.studentName='Sita'
// console.log(student)
// console.log("---------------------------------------------")
// console.log(studentClone)



//delete student.age
//console.log(student.age)
// console.log(student.marks.English)
// console.log(student.marks['Maths'])
// console.log(student['marks']['English'])
//student.displayInformation()
 //console.log(student.studentName)
 //console.log(student['age'])

// let secondStudent=new Object()
// secondStudent.studentName='Shyam'
// console.log(secondStudent.hasOwnProperty('age'))
// console.log(secondStudent)
// let ob1={
//     c:20
// };

// Object.defineProperty( ob1, 'c', {
//     value: 100,
//     enumerable: false,
//     writable: false,
//     configurable: false
//   });
//   console.log(ob1.c); // The property value will be 100.
//   console.log( Object.getOwnPropertyDescriptor( ob1, 'c' ));
   // It returns a property descriptor for an own property.
//   var ob = {};
//   Object.defineProperty( ob, 'a', {configurable: true, value: 1} );
// console.log(  ob.a); // => {a:1}
//    console.log(delete ob.a); // => true
//   console.log( ob); // => {}
//   Object.defineProperty( ob2, 'a', {configurable:false, writable:true} );
//   Object.defineProperty(ob2, 'a', { enumerable: true }); // throws a TypeError : Cannot redefine property: a
  

let movies=[
    {
MovieName:'abc',
ratings:3
    },
    {
MovieName:'xyz',
ratings:2
    }
]



