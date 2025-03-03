function play(chooseItem) {
  const optionsToPlay = ["Pedra", "Papel", "Tesoura"];
  const aiChoose = optionsToPlay[Math.floor(Math.random() * 3)];

  document.getElementById("imgPlayer").src = `assets/Human/${chooseItem}p1.png`;
document.getElementById("aiPlay").src = `assets/IA/${aiChoose}ia.png`;

  let result = "";

  if (chooseItem === aiChoose) {
    result = "Empate!";
  } else if (
    (chooseItem === "Pedra" && aiChoose === "Tesoura") ||
    (chooseItem === "Papel" && aiChoose === "Pedra") ||
    (chooseItem === "Tesoura" && aiChoose === "Papel")
  ) {
    result = "Você ganhou!";
    document.getElementById("scoreHuman").textContent = Number(document.getElementById("scoreHuman").textContent) + 1;
  } else {
    result = "Você perdeu!";
    document.getElementById("scoreIA").textContent = Number(document.getElementById("scoreIA").textContent) + 1;
  }

  document.getElementById("winOrLose").innerHTML = result;
}

function reset() {
  document.getElementById("scoreHuman").textContent = 0;
  document.getElementById("scoreIA").textContent = 0;
  document.getElementById("winOrLose").innerHTML = "";
  document.getElementById("imgPlayer").src = "./assets/Human/human.png";
  document.getElementById("aiPlay").src = "./assets/IA/ia.png";
}