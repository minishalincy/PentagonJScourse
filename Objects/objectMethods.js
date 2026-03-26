let animal = {
    name :'cat',
    breed:'Indie',
    color:'orange',
    sound : function(){
        console.log('meoww');
        
    },
    food:['milk','fish','chicken'],
     location :{
        home:'sofa',   
    },
}

//value
Object.values(animal)
console.log(animal);

//keys
Object.keys(animal)
console.log(animal);

//entries
Object.entries(animal)
console.log(animal);

//seal
Object.seal(animal)
 delete animal.breed 
console.log(animal);

//freeze
Object.freeze(animal)
 delete animal.breed 
console.log(animal);

