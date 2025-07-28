//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
    document.querySelector('ul').innerHTML = ''
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      data.subclasses.forEach((el) => {
        const li = document.createElement("li");
        li.textContent = el.name;
        document.querySelector('ul').append(li);
        const subclassUrl = `https://www.dnd5eapi.co` + el.url;
        console.log(subclassUrl);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
