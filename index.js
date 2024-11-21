"use strict";
// let a; wrong
/*
let a: number = 68;
let b: boolean = true;
let c: string = "Ryan Dhal"
let d: number[] =  [1,2,3,4,5,6,7,90];
let e: [number, number] = [1,23];
function add(a:number, b:number):number{
    return a+b;
}
console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(add(99,23))
*/
// Type Inference -  when data type is automatically guessed when we declare a variable
/*
let x = 2
console.log(x)
*/
//Union - include both types 
/* correct but shows error can be used inside functons without any errors
let variable: string|number;
variable=9992.327;
if(typeof variable === 'string'){
    console.log("String: ",variable.toUpperCase())
}else if(typeof variable === "number"){
    console.log("Number: ",variable.toFixed(2))
}
*/
// function abs(variable: number| string){
//     if(typeof variable === 'string'){
//         console.log("String: ",variable.toUpperCase())
//     }else if(typeof variable === "number"){
//         console.log("Number: ",variable.toFixed(2))
//     }
//     return variable;
// }
// console.log(abs("87"))
//Intersections - creating a type from the intersection of two types
// type Classmates = {name : string}
// type Students = { age : number}
// type ClassmatesStudentsIntersection = Classmates & Students;
// let a: ClassmatesStudentsIntersection = {
//     name: "Your Name",
//     age: 76
// }
// console.log(a)
//Type alias 
//1 primitive
// type Name =  number;
// let a: Name;
// a=3;
// console.log(a)
//2 object
// type user = {
//     name: string,
//     age: number,
//     email: string,
// }
// let a: user = {
//     name:"ERm",
//     age: 24,
//     email:""
// }//Provide all
// interface Id {
//     name: string,
//     age: number,
//     email: string
// }
// type AcName =  string;
// class AirConditioner{
//     name:AcName;
//     temprature:number;
//     constructor(name:AcName, temprature=20){
//         this.name = name;
//         this.temprature= temprature;
//         console.log("AC: ", this.name," | ","Temprature: ", this.temprature)
//         console.log("AC has been turned ON")
//     }
//     increaseTemprature():void{
//         this.temprature++;
//         console.log("Increased AC temprature: ",this.temprature);
//     }
//     decreaseTemprature():void{
//         this.temprature--;
//         console.log("Decreased AC temprature: ",this.temprature);
//     }
// }
// const ac1 = new AirConditioner("Small AC")
// ac1.increaseTemprature()
// ac1.increaseTemprature()
// ac1.increaseTemprature()
// const ac2 = new AirConditioner("Big AC")
// ac2.decreaseTemprature()
// ac2.decreaseTemprature()
// class Account{
//     private name:string;
//     private balance: number;
//     constructor(name:string, balance: number){
//         this.name = name
//         this.balance = balance
//         console.log(`Account has Been created: Name: "${this.name}" Balance: "${this.balance}"`)
//     }
//     getBalance():number{
//         console.log("The Balance is: ",this.balance)
//         return this.balance;
//     }
// }
// const x = new Account("Ram", 6900)
// x.balance=300;//This is fault
// console.log(x.getBalance())
