function myBoy(){
  console.log("he plays in the nba")
}

myBoy();

function addition(x, y){
    return x + y;
}

console.log(addition(15, 5))

function convertor(z){
    return z*1000;
}

console.log( convertor(18)+" meters")

















function myCar(m){
    return m;
}

function newCar(){
    let car = myCar("my first car should be a sports car like...")

    console.log(car +" benz")
}

newCar();



let bakery = new Object()

bakery.cakes = "wedding cakes, birthday cakes, funeral cakes"
bakery.price = "250000,30000,free"

console.log(bakery)

//methods

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  console.log(person.fullName())