// let name = "sania";
// console.log(name);
// questionssss  of variables
// string
// console.log(5==="5");



// print even or odd number
// let num=10;
// if(num % 2 == 0){
//     console.log("Even");
// }else{
//     console.log("Odd");
// }


// check of a person is adult or minor
// let age=34;
// if(age>=18){
//     console.log("the person is adult");
// }else{
//     console.log("minor");
// }
// 

// check if a no is positive or negative
// // let num=8;
// // if(num>0){
// //     console.log("the no is positive");
// // }else if(num<0){
// //     console.log("the no is negative");
// // }else{
// //     console.log("print zero");
// // }

// // print largest among 2 numbers
// let num1=10;
// let num2=20;
// if(num1<num2){
//     console.log("num2 is largest");
// }else if(num1>num2){
//     console.log("num1 is largest");
// }else{
//     console.log("both are equal");
// }


// // check if a number is zero
// let num=0;
// if(num===0){
//     console.log("no is zero");
// }else{
//     console.log("no is not zero");
// }
// create the grade system
// let marks = 85;
// if (marks >= 90) {
//     console.log("grade A");
// } else if (marks >= 80) {
//     console.log("grade B");
// } else if (marks >= 70) {
//     console.log("grade C");
// } else {
//     console.log("failed")
// }

// // no is divisible by 5 or not
// let num=50;
// if (num%5===0){
//     console.log("yes divide by 5");
// }else{
//     console.log("not divisible by 5");
// }

// // divide by both 3 and 5
// let num=15;
// if(num%5===0 && num%3===0){
//     console.log("yes divisible by both 3 and 5");
// }else{
//     console.log("not divisible");
// }


// // check leap year or not
// let year=2024;
// if((year%4===0 && year%100!==0) || (year%400===0)){
//     console.log("yes leap year");
// }else{
//     console.log("not a leap year");
// }

// // check age using ternary operator
// let age=28;
// let result=(age>=18) ? "Adult" : "Minor" ;
// console.log(result);


// // even or odd using ternary operator
// let num=8;
// let result=(num%2===0) ? "Even" : "Odd";
// console.log(result);

// // pass\fail using ternary operator
// let marks=45;
// let result=(marks>=30)? "Pass" :"Fail";
// console.log(result);

// // largest among two numbers
// let number1=34;
// let number2=20;
// let result=(number1>number2)? number1:number2;
// console.log(result);

// // positive or negative 
// let num=3;
// let result=(num>=0) ? "positive":"negative";
// console.log(result);

// for loop
// for(let i=10;i>=1;i--){

// console.log(i);
// }

// to pribnt even number from 1 to 20
// for(i=1;i<=20;i++){
//     if(i%2===0){
//         console.log(i);
//     }

    
// }

// for(i=1;i<=20;i++){
//     if(i%2!==0){
//         console.log(i);
//     }

    
// }
// print table of 5
// for (let i = 1; i <= 10; i++) {
//     console.log(`5 x ${i} = ${5 * i}`);
// }

// // print sum of numbers fron 1 to 10
// let sum=0;
// for(let i=1;i<=10;i++){
//     sum=sum+i;
// }
// console.log("Sum=",sum);

// print stars

    // Repeat only for first 2 rows
for (let i = 1; i <= 3; i++) {
    // First increasing pattern
    for (let j = 1; j <= i; j++) {
        console.log("*");
    }
    console.log("<br>");

    // Repeat only for first 2 rows
    if (i < 3) {
        for (let j = 1; j <= i + 1; j++) {
            console.log("*");
        }
        console.log("<br>");
    }
}
// print reverse numbers
for (let i = 50; i >= 1; i--) {
    console.log(i);
}