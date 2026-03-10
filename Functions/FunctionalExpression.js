let greet = function(){
    console.log('Hello');
}

greet();

//square of 2 numbers

let square = function(num) {
    return num * num;
};

let num1 = Number(prompt("first number"));
let num2 = Number(prompt("second number"));

confirm(square(num1));
confirm(square(num2));