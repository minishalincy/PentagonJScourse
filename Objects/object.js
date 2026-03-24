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
