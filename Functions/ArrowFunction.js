let  c = (a,b) =>{
    console.log(a+b);
}

c(10,20)


let details =(name)=>{
    console.log('mini');
}

details()

let factorial = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact = fact * i;
    }

    return fact;
}

let num1 = Number(prompt('enter the number'));

confirm(factorial(num1))

