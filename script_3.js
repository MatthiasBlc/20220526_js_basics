let rows = prompt("Nombre d'étages ?");

function pyramid(rows) {

  for (let i = 0; i < rows; i++) {
    var draw = '';
    for (let space = 0; space <= rows- i; space++) {
      draw += ' ';
    }
    for (let element = 0; element <= i; element++) {
      draw += '#';
    }
    console.log(draw);
  }
}
pyramid(rows);


