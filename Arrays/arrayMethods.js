
//homogenous array
let users = ["mini","lincy"]
console.log(users);

//heterogenous array
let user1 = ['linc',null,undefined,10]
console.log(user1);


//array methods
let user2 = ['mini','lincy']
console.log(user2);

//push()
user2.push('MinishaLincy')
console.log(user2);

//pop()
user2.pop()
console.log(user2);

//unshift
user2.unshift('minisha')
console.log(user2);

//shift
user2.shift()
console.log(user2);

let newusers = []
// let newusers1 =  prompt('enter name')
newusers.push(newusers1)
console.log(newusers);


let members = []
for(var i = 0;i<2;i++){
    // let input = prompt('enter the member name')
    members.push(input)
}

console.log(members);


//splice method
//removing
let students = ['vamshi','minisha','lincy']
students.splice(0,1)
console.log(students);

//adding
students.splice(1,0,"minishalincy")
console.log(students);


//for of loop
let arr = [90,35,58,56];
for(i of arr){
    console.log(i);
    
}

//2D array
let arr2D =[
  [2,4,6],
  ['orange','watermelon','mango'],
  ['carrot','raddish','beetroot'],
]

console.log(arr2D[2][1]); //[row][col]


