function Person(first,last,age,favColor){
    this.firstName= first;
    this.lastName=last;
    this.age=age;
    this.favColor=favColor;
    //a value given as default is applied to all objects created by the contructor
   // this.nationality="Ugandan";

//a constructor can also have methods

this.fullName = function() {
return this.firstName + " " + this.lastName;
  };


}
const mySelf = new Person("Magona", "Caleb", 25, "blue");
//changing a method to a created object

mySelf.change = function(name){
    this.lastName=name;
}
mySelf.change("Powell");



console.log(mySelf.fullName());






const myDog = new Person("rouller", "woof", 5, "yellow");
const myBro = new Person("Pete", "Davinson", 22, "cyan");
//now adding to the constructor and making the alterations there


Person.prototype.change2 = function(nam){
    this.firstName = nam;
}
myBro.change2("Birungi")


console.log(myBro.firstName);

/*
//adding a property to an object is done as below that property is added to a single document

myBro.nationality="Kenyan";

//You can NOT add a new property to an object constructor name like .Person but use the one below

Person.prototype.nationality="Tanzanian";
//from this code below we confirm that it's added
console.log(myDog.nationality)

*/