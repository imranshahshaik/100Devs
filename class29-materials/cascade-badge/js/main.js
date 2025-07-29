//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.
const pokemon = ["pikachu", "onyx", "hangar", "bulbasour", "wabaffe", "meouth"];
// pokemon.reverse()
const reversed = [];
// for(let i = pokemon.length -1 ; i>=0; i--){
//     reversed.push(pokemon[i])
// }
for (let i = 0; i < pokemon.length; i++) {
  reversed.unshift(pokemon[i]);
}
const reversePokemon = "";
console.log(reversed);

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.
const a = [1, 5];
const b = [1, 3];
function compareSquareCube(a,b) {
  const aSquare = a.reduce((acc, curr) => {
    return curr * curr + acc;
  }, 0);
  const bCube = b.reduce((acc, curr) => {
    return Math.pow(curr, 3) + acc;
  }, 0);
  if(aSquare>bCube) return true
  return false
}
console.log(compareSquareCube([1,6],[1, 3]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(array){
const filtered = array.filter((el,i)=>el%i===0)
console.log(filtered)
}
isMultiple([68, -1, 1, -7, 10, 10])

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.
function sumofArray (arr){
    return arr.reduce((acc,c)=>(acc)+Number(c),0)
}

console.log(sumofArray(['5',3,'3',1]))