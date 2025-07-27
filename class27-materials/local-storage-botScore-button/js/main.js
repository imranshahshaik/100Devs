//Create a button that adds 1 to a botScore stored in localStorage 

if(!localStorage.getItem('score')) localStorage.setItem('score', 0)
function handler(){
    const score = +(localStorage.getItem('score'))
    localStorage.setItem('score', score+1)
}
