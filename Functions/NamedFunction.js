function addition(a,b){
    console.log(a+b);
    
}

addition(10,20)

//default parameter
function greet(name = 'Mini'){
    console.log(`Hello ${name}, Good morning`);
    
}
greet()

//rest parameter
function number(...nums){
    console.log(nums);
    
}

number(10,20,20,20,30)

function details(name, age) {
    console.log(`My name is ${name} and i am ${age} years old`);
}

details('Mini',21)