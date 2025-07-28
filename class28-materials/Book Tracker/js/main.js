//Example fetch using pokemonapi.co

if(localStorage.getItem('title')) document.querySelector('h4').textContent = localStorage.getItem('title')

// fetch('https://openlibrary.org/api/books?bibkeys=ISBN:1847941834&jscmd=data&format=json').
// then(res=>res.json())
// .then(data=>{
//   const key = Object.keys(data)[0]
//   const title = data[key].title
//   // document.querySelector('h2').textContent = title
// })

document.querySelector('button').addEventListener('click', ()=>{
  const choice = document.querySelector('input').value
  fetch(`https://openlibrary.org/isbn/${choice}.json`).then(res=>res.json())
  .then(data=>{
    if(!localStorage.getItem('title')) {
      localStorage.setItem('title',data.title)
    }else{
    let booksTitle = localStorage.getItem('title') + ' ; ' + data.title

    localStorage.setItem('title', booksTitle)
    }
    document.querySelector('h4').textContent= localStorage.getItem('title')
  })

})