//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class Espresso{
    constructor(color,qty,sugar,type){
        this.color= color
        this.qty = qty
        this.sugar = sugar
        this.type = type
    }
    make(){
        console.log('brrrr!')
    }
    brew(){
        console.log('breeeewww')
    }
    shake(){
        console.log('shaaaaaaǎke')
    }

}

let coffeeMachine = new Espresso('brown',2,0,'green Tea')
