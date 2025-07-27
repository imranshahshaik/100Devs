//Example fetch using pokemonapi.co
let deckId = "";
if (!localStorage.getItem("deckId")) {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("deckId", deckId);
      deckId = data.deck_id;
      console.log(deckId);
    });
} else deckId = localStorage.getItem("deckId");

document.querySelector("button").addEventListener("click", () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("player1").src = data.cards[0].image;
      document.getElementById("player2").src = data.cards[1].image;
      console.log(data);
      const p1Value = ConvToNum(data.cards[0].value);
      const p2Value = ConvToNum(data.cards[1].value);
      if (p1Value > p2Value)
        document.querySelector("h4").innerText = "player 1 won";
      else if (p1Value < p2Value)
        document.querySelector("h4").innerText = "player 2 won";
      else document.querySelector("h4").innerText = "war!!!!!!!";
    });
});

function ConvToNum(val) {
  if (val == "ACE") {
    return 14;
  } else if (val == "KING") {
    return 13;
  } else if (val == "QUEEN") {
    return 12;
  } else if (val == "JACK") {
    return 11;
  } else {
    return Number(val);
  }
}
