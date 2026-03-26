let employee={
    empID:181,
    name:'minisha',
    designation:'SDE',
    work: function(){
        console.log('Building frontend and backend application');
    },

    location:{
        state:"Telangana",
        city:'Hyderabad',
    },

    technologies:['Javascript','Nodejs','Expressjs','MongoDB'],
}
employee.salary = 100000;

delete employee.empID;
console.log(employee)


let car = {
    brand : 'KIA',
    color: 'Black',
    speed: function(){
        console.log('car is speeding over 100kmph');
        
    },

}

car.speed()
console.log(car.brand = 'BMW');

delete car.brand
console.log(car);

console.log(speed='stop the car');

// for in loop

// A this loop is used to access the keys & values present inside an object

// syntax:
// for (let varname in objectName)

let mobile = {
    name: 'Nothing',
    price: 20,
    color: 'black',
    call: function () {
        console.log('Nothing is calling');
    },
    model: ['2a', '3a', '3b'],
    storage: {
        ram: '8GB',
        rom: '128GB'
    }
};

for (let keyi in mobile) {
    if (typeof mobile[keyi] === 'function') {
        mobile[keyi]();
    }
    else if (Array.isArray(mobile[keyi])) {
        for (let i of mobile[keyi]) {
            console.log(i);
        }
    }
    else if (typeof (mobile[keyi]) === 'object') {
        for (let keysi in mobile[keyi]) {
            console.log(keysi + " : ", mobile[keyi][keysi]);
        }
    }
    else {
        console.log(mobile[keyi]);
    }
}