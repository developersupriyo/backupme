// const details = {
//     Name: 'SUPRIYO',
//     isCoder: true,
//     age: 21,
//     greet: function(){
//         console.log(`Hey ${this.Name} whatsUp !!!`);     //& Normal Function
//     },
    // greet(){
    //     console.log(`Hey ${this.Name} whatsUp !!!`);   //& Other Format
    // },
    // greet:()=>{
    //     console.log(`Hey ${this.Name} whatsUp !!!`);   //& Arrow Function
    // },
//     Verify: function(){
//         if(!this.isCoder){
//             console.log(`${this.Name} is not a Coder.`);
//         }else{
//             console.log(`${this.Name} is a Coder`)
//         }
//     }
// }

// details.greet(); //& Calling method   
// details.isCoder = false; //& Modifing
// details.Name = 'Rahul';
// details.Verify();

// console.log(details);
// delete details.age;   //& Delete keys
// console.log(details);


// const subDetails = new Object();
// subDetails.Maths = 'R.S Aggarwal';     //& Object Constructor
// subDetails.Physics = 'H.C Verma';
// subDetails.Chemistry = 'O.P Tendon';

// console.log(subDetails['Maths']);


//& Factory Function

// function createUser(name , sub){
    //     return{
        //         name,
        //         sub,
        //         greet(){
            //             console.log(`${this.name} is good at ${this.sub}`);
            //         }
            
            //     }
            // }
            
            // const user1 = createUser('supriyo','Mathematics');
            // user1.greet();
            
//& Factory Function

//& ES6 Class Syntax


// class Subjects{
//     constructor(name){
//         this.name = name;
//     }
//     fun(){
//         console.log(`${this.name} is a good BOOK !!`);
//     }
// }

// const sub1 = new Subjects('Mathematics');
// console.log(sub1.name);


//& ES6 Class Syntax

//& Built in Objects

// const date = new Date();
// console.log(date.getFullYear())

// console.log(Math.pow(2,4));

//& Built in Objects

//& Data Interchange

// const obj = { name: "Supriyo", age: 25 };
// const jsonString = JSON.stringify(obj); // to JSON string
// console.log(obj);
// console.log(jsonString);
// // const newObj = JSON.parse(jsonString);  // back to object


//& Data Interchange

//& ERROR Catching

// function Hello(name){
//     return{
//         name,
//         greet(){
//             console.log(`${this.name} is Great !!!`);
//         }
//     }
// }
// const user1 = Hello('Smalakar');
// try{
//     user1.greet('sm');
// }catch(e){
//     console.log(e.message)
// }

//& ERROR Catching

// console.log(parseInt(45.990))

//& TYPED ARRAY
// const buffer = new ArrayBuffer(8);       // 4 bytes
// const view = new Uint8Array(buffer);     // 8-bit unsigned view
// view[0] = 255;
// console.log(view);                       // Uint8Array(4) [255, 0, 0, 0]


//& TYPED ARRAY

//? Something New

// const container = document.querySelector(".container");
// const newDiv = document.createElement("div");
// newDiv.textContent = "I’m a new div!";

// container.append(newDiv, " 👋"); // Adds both a node and a string

// const heading = document.querySelector("h1");
// console.log(heading.parentElement);

//? ENDS

// function fetchData(callBack){
//     callBack("This is the Data You are Searching for");
// }
// fetchData((e)=>{
//     console.log(e);
// })


// function* myGenerator() {
//   yield "Hello";
//   yield "World";
//   return "Done";
// }

// const gen = myGenerator();
// console.log(gen.next()); // { value: 'Hello', done: false }
// console.log(gen.next()); // { value: 'World', done: false }
// console.log(gen.next()); // { value: 'Done', done: true }
// console.log(gen.next()); // { value: undefined, done: true }


const it = ["JS", "is", "cool"]
console.log(it.next()); // { value: 'JS', done: false }
console.log(it.next()); // { value: 'is', done: false }
console.log(it.next()); // { value: 'cool', done: false }
console.log(it.next()); // { done: true }