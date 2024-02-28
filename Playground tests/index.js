const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,

    sayHello: function(){ console.log(`Hi! i'm ${this.firstName}`)},
    objeto: function(){console.log(this)},
}
const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false,
    
    sayHello: () => { console.log(`Hi! i'm ${this.firstName}`)},
}
class produto{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(this.name);
        console.log("$" + this.price.toFixed(2));
    }

    leva2(price){
        price = this.price
        return price*2;
    }

    static leva2(price){
        return price*2
    }
}


person.sayHello();
person2.sayHello(); 
person.objeto();
let ew = {nome:"as", metodo: function(){console.log("essa porra é um objeto ou um dicionario")}}

let produto1 = new produto("Calças", 50.22)
ew.metodo();        
produto1.displayProduct();
console.log(produto.leva2(55.22));

console.log(produto1.leva2(55.22));