// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once. You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7. Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). Finally, create a fourth variable named totalCandies that sums all the rare candies you would need. 

const bulbasaur = 11
const caterpie = 6
const weedle = 6
const sum = bulbasaur + caterpie + weedle
console.log(sum)

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
function FahrenheitToCelcius(f){
    const fahrenheit = f
    const celsius = (fahrenheit - 32) * 5/9
   return (celsius)

}
function canCharmanderFight (f){
    const celsius = FahrenheitToCelcius(f)
    if(celsius>0) return true
    return false
}
console.log(canCharmanderFight(10))
//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party
function pikachu(){
    console.log('Pikachu I choose you')
}

function pokemonCount(n){
    for(let i = 1; i<=n; i++){
        pikachu()
    }
}

pokemonCount(5)