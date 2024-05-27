let person = {
   
    
    products : ["cakes","bread","milk","water", {patient:"we are kawa",boy:40},{girl:"bigeyes",mother:"caring"}],

    example: function() {
      return this.products[5].mother;
    }
  };
  
  console.log(person.example())