const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



function atLeast1(array) {
  let asw1 = true;
  var i = 0
  while (i < books.length) {
    if (books[i].rented > 0) {
      asw1 = true;
      i++
    } else {
      asw1 = false;
      break;
    }
  }
  if (asw1) {
    console.log('oui')
  } else {
    console.log('non')
  }
}

function mostRented(array) {
  const rented = books.map(el => el.rented)
  max = Math.max(...rented)
  let result = array.find(obj => obj.rented === max);
  return result.title;

}

function leastRented(array) {
  const rented = books.map(el => el.rented)
  min = Math.min(...rented)
  let result = array.find(obj => obj.rented === min);
  return result.title;
}

function findABook(array) {
  let result = array.find(obj => obj.id === 873495);
  return result;
}

function deleteABook(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id === 133712) {
      array.splice(i, 1);
    }
  }
  return array
}

function sortBooks(array) {
  const asw2 = array.sort((a, b) => a.title.localeCompare(b.title));
  return asw2;
}

console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?");
console.log(atLeast1(books));
console.log("Quel est livre le plus emprunté ?");
console.log(mostRented(books));
console.log("Quel est le livre le moins emprunté ?");
console.log(leastRented(books));
console.log("Trouve le livre avec l'ID: 873495 ;");
console.log(findABook(books));
console.log("Supprime le livre avec l'ID: 133712 ;");
console.log(deleteABook(books));
console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");
console.log(sortBooks(books));