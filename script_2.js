let x = prompt("De quel nombre veux-tu calculer la factorielle ?");
let y = 1;

if (x < 1) {
  x = 1;
}
do {
  y = y * x;
  x--;
}
while (x > 0)

console.log(`Le résultat est : ${y}`)