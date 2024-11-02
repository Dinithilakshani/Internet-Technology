
//Object     

let person = {
    Fname:'dinu',
    Lname:'hashi',
    age:20,
    hobbies :['musix','dance'],
    address:{
        street:'50 manin st',
        city:'Galle',
        state:'ma'
    },
    getbirthdayYear: function(){
return 2024-this.age
    }

}
console.log(person)
console.log(typeof person)

console.log("==============================")
//Acceaaing Object Properties







console.log("first name"+ person.Fname)
console.log('last Name' +person.Lname)
console.log('city'+ person.address.city)
console.log("birth year"+ person.getbirthdayYear)

//bracket notation

console.log("first name"+ person['Fname']);
console.log('last Name' +person['Lname']);
console.log('city'+ person['address']['city']);
console.log("birth year"+ person['getbirthdayYear']);


person.phone ='0789089888'
console.log(person)
person.Fname = 'Dinithi'
person.Lname ='Lakshani'
console.log(person)

delete person.Lname;
console.log(person)

let car = {
    brand :'Toyota',
    model:'Corolla',
    getdescription : function(){
        return ${this.brand} - ${this.model}
       //return this.brand + "-" +this.model; 
    }
}
console.log(car.getdescription());