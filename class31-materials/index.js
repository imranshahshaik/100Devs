class Animal{
    constructor(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    speak(){
        console.log(`${this._name} is speaking`)
    }
}
class color{
    constructor(color){
        this.color = color
    }
}
class Dog extends Animal{
    constructor(name, breed){
        super(name)
        this.breed = breed
    }

}
const tommy = new Dog('tommy', 'dabur')
console.log(tommy, tommy.speak())