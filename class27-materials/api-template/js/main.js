//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
var video = document.createElement('iframe')

function getFetch(){
  // const date = document.querySelector('input').value
  const date = '2021-02-03'
  const url = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=cAKUFk5Mi1SLl3sUwZrAYpHeAL9B3OjK5gYx9b4Z`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h1').innerText = data.title
        document.querySelector('h2').innerText = data.explanation
        if(data.media_type=='video'){
          video.src = data.url
          video.setAttribute('controls', true)
          document.body.appendChild(video)
        }
        else document.querySelector('img').src = data.hdurl
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

