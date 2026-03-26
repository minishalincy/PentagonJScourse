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

Object.values(animal)
console.log(animal);
Object.keys(animal)
console.log(animal);

//seal
Object.seal(animal)
 delete animal.breed 
console.log(animal);

//freeze
Object.freeze(animal)
 delete animal.breed 
console.log(animal);

