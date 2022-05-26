let ask = prompt(">");


if (ask.slice(-1).toString() === "?") {
  console.log('Ouais Ouais...');
} else if (ask.toUpperCase() === ask && ask != "") {
  console.log('Pwa, calme-toi...');
} else if (ask.includes("Fortnite")) {
  console.log("on s' fait une partie soum-soum ?");
} else if (ask === "") {
  console.log("t'es en PLS ?");
} else {
  console.log("balek.");
}