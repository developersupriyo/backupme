// // For Loop
//      //Intialization;condition;updation
// for (let p=1;p<=10;p+=2){
//     console.log("Hello Mina")
// }
// console.log("Loop Ended")

// // While Loop

// let a=1;//Initialization
// while(a<=8){//condition
//     console.log("OK");
//     a++;//updation
// }

// // Do While Loop

// let m=13;//Initialization
// do{
//     console.log("Okay");
//     m++;//condition
// }while(m<=12);


// for of Loop used for Strings & arrays

// let string="srivastava";
// let size=0;
// for(let val of string){
//     console.log("val =",val);
//     size++;
// }
// console.log("Total Character =", size);//10


// // for in Loops Used for Object & arrays

// let student={
//     fullName:"Rahul Sharma",
//     age:23,
//     CGPA:8.9
// }

// for(let i in student){
//     console.log("Key =",i,"//  Value =",student[i])
// }




// Print all even number between 0-100 .

// for(let n=0;n<=100;n++){
//     if(n%2===0){
        
//         console.log("evenNum =", n)
//     }
// }

// string Operator

// let str="Hello World is Basic code text."
// console.log(str.length);
// console.log(str[24],str[4],str[19]);


//Template Literals

// let obj={
//     item:"pen",
//     price:23,
// };
// console.log("The cost of",obj.item,"is",obj.price,"rupees.");
// let output=`The cost of ${obj.item} is ${obj.price} rupees.`;
// console.log(output);


// String Method

// let str="rohit";
// let m=str.toUpperCase();  // it does'nt change the original string..
// console.log(m);


// Practice 1Q

// let input=prompt("Type Your Name :");
// let pre="@";
// let post=input.length;
// let outputI=pre.concat(input);
// let outputF=outputI.concat(post);
// console.log(outputF);

//alternate

// let userInput=prompt("Type Your Full Name Without Space :");

// let userName="@"+ userInput + userInput.length ;
// console.log(userName);


// Arrays


// let ary=["rahul","rohit","jonny","sourav"];
// console.log(ary.length);


// Practice 2Q

// let marks=[85,97,44,37,76,60];
// let sum=0;

// sum=marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
// let avg= sum/marks.length;
// console.log(avg);


// Practice 3Q


// let price=[250,645,300,900,50];
// let i=0;
// for(let val of price){
//    let offer=val/100*10;
//     price[i]=price[i]-offer;
//     console.log(price);
//     i++;
// }


// Arrow Function


// let arrowMul=(a,b) =>{
//     console.log(a*b);
// }
// arrowMul(2,4);


// Practice 4Q

function vowel(rimjhim){
    console.log(rimjhim);
}

vowel();















































