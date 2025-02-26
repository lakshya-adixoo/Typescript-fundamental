// types
// // numbers 
// let arr : number = 1;
// let arr1 : string ;
// arr1 = "lKSHY";
// let arr2 : [number , string , boolean] = [1 , "lakshya" , true ];
// enum information {
//     name = "lakshya" ,
//     age = "22",
//     residence = "indore"
// }
// console.log(information.residence)
// //type inference
// let a = 12 ;
// let b = "string";
// let c = true;
// union and intersection type 
// let variable : string | null ;
// variable = "hello";
//union 
// function abcd(variable: string | number){
//     if(typeof variable === 'string'){
//         variable.length;
//     }
// }
// abcd(23);
// abcd("lakshya");
//intersection
// type classmate = {
//     Section : String
// }
// type students = {
//      name : String 
// }
// type classmateInNames = classmate & students ;
// let a : classmateInNames = {
// Section : "A",
// name : "lakshya"
// }
// //primivite type alais
// type sankhya = number ;
// let b : sankhya;
// interface user {
//       name : string,
//       email : string,
//       mobile : number,
//       dept : string
// }
// function abcd (User : user){
//     User.mobile. 
// }
// type Data = string | null ;
// class Pendrive {
//     company = "hp";
//     price = 1200;
//     data : null | string = null;
//     putData (data : Data){
//         console.log(`putting some data ${data}`);
//         this.data = data;
//     }
//     getData(data:Data){
//         console.log(data);
//     }
// }
// let new1 = new Pendrive();
// new1.putData("12");
// class Pendrive {
//     company : string ;
//     price : number;
//     constructor(name:string , price :number){
//         this.company = name;
//         this.price = price;
//     }
// }
// let p1 = new Pendrive("apple", 1000);
// let p2 = new Pendrive("hp" , 80899);
//constructor
// class User {
//      balance = 1200;
//     getbalance(){
//         console.log(this.balance);
//     }
// }
// let ul = new User();
// ul.getbalance = 76576;
//read only
// class abcd{
//     constructor(public readonly name:string){
//          this.name = name;
//     }
//     setName(value:string){
//         this.name = value;
//     }
// }
// class abcd{
//     constructor(public username:string){
//         this.username = username;
//     }
//     get name() {
//         return this.username;
//     }
//     set name(value:string){
//         this.username = value;
//     }
// }
// let abcd1 = new abcd("lakshya");
// abcd1.name = "utkarsh";
// console.log(abcd1.name);
// function addition(name:string): String {
//     return "hey" ;
// }
//litertals
var namee;
