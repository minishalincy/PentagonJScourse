//if
let age = 12;
if(age >= 18){
    console.log('eligible to vote');
    
}

//if - else
let num = Number(prompt('enter a number'));
if(num % 2 == 0){
    console.log('Even number');
    
}else{
    console.log('Odd number');
    
}

//else - if ladder

let obMarks = Number(prompt('enter your marks'))
if(obMarks >= 35){
    console.log('PASS');
}else if(obMarks){
    console.log('AVERAGE');
    
}else{
    console.log('GOOD');
    
}

//ternary operator
let marks = Number(prompt('enter ur marks'));

let result = marks > 35 ? 'PASS' : 'FAIL';
console.log(result);


//Finding highest number
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let num3 = Number(prompt("Enter third number:"));

if (num1 >= num2 && num1 >= num3) {
    console.log( num1);
} 
else if (num2 >= num1 && num2 >= num3) {
    console.log( num2);
} 
else {
    console.log( num3);
}


//summing the number based on the NUMBER datatype
let numb1 = Number(prompt("Enter first number:"));
let numb2 = Number(prompt("Enter second number:"));
let numb3 = Number(prompt("Enter third number:"));

if(typeof(numb1) && typeof(numb2) && typeof(numb3)){
    console.log(numb1 + numb3 + numb3);
    
}else{
    console.log('invalid datatypes');
    
}