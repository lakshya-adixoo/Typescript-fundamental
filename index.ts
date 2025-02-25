// // // types

// // // numbers 
// // let arr : number = 1;
// // let arr1 : string ;
// // arr1 = "lKSHY";

// // let arr2 : [number , string , boolean] = [1 , "lakshya" , true ];

// // enum information {

// //     name = "lakshya" ,
// //     age = "22",
// //     residence = "indore"
// // }

// // console.log(information.residence)


// // //type inference
// // let a = 12 ;
// // let b = "string";
// // let c = true;

// // union and intersection type 

// // let variable : string | null ;

// // variable = "hello";

// //union 
// // function abcd(variable: string | number){
// //     if(typeof variable === 'string'){
// //         variable.length;
// //     }
// // }

// // abcd(23);
// // abcd("lakshya");

// //intersection

// // type classmate = {
// //     Section : String
// // }
// // type students = {
// //      name : String 
// // }

// // type classmateInNames = classmate & students ;

// // // let a : classmateInNames = {
// // // Section : "A",
// // // name : "lakshya"
// // // }

// // //primivite type alais

// // // type sankhya = number ;
// // // let b : sankhya;

// // interface user {
// //       name : string,
// //       email : string,
// //       mobile : number,
// //       dept : string
// // }

// // function abcd (User : user){
// //     User.mobile. 
// // }

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


