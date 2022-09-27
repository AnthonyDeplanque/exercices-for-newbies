const saySomething = (something) => {
  document.write(`${something}</br>`);
};

/*
Fonction fléchée
Une fonction fléchée (arrow function en anglais) permet d’avoir une syntaxe plus courte que les fonction.
Les fonctions fléchées sont souvent anonymes et ne sont pas destinées à être utilisées pour déclarer des méthodes.

SYNTAXE FONCTION / FONCTION FLECHEE :

function functionName (parameter) {
  ...code
}

const arrowFunction = (parameter) => {
  ...code
}

Si une fonction fléchée est sur une seule ligne, il n'y a pas besoin de mettre d'accolades, et le return est implicite

const arrowFunction = (a, b) => a + b;

// Même chose que 

const arrowFunction = (a, b) => {
  return a + b
}

// et peut aussi ne pas avoir de return, ou retourner une valeur vide !
const saySomething = (something) => document.write(`${something}</br>`)

Methodes de Tableau 

  array.forEach() fera comme une boucle for pour parcourir le tableau.
  dans le forEach, nous y mettrons une fonction qui aura en paramètre une itération du tableau
  Par exemple :
  const tableauDeMots = ['asperge','cendrier','hippopotame','climatiseur'];
  tableauDeMots.forEach(function(mot){ // ce que doit faire le forEach // })

  le .map() fait exactement pareil que le forEach mais peut retourner 
  une valeur à chaque tour de tableau (à voir plus tard avec les fonctions fléchées)

*/


const véhicules = [
  {
    type: "voiture",
    marque: "toyota",
    puissance: 120
  },
  {
    type: "voiture",
    marque: "honda",
    puissance: 150
  },
  {
    type: "voiture",
    marque: "suzuki",
    puissance: 90
  },
  {
    type: "moto",
    marque: "honda",
    puissance: 125
  },
  {
    type: "voiture",
    marque: "dodge",
    puissance: 225
  },
  {
    type: "moto",
    marque: "suzuki",
    puissance: 175
  },
  {
    type: "moto",
    marque: "kawazaki",
    puissance: 200
  },
  {
    type: "bateau",
    marque: "toyota",
    puissance: 120
  },
  {
    type: "avion",
    marque: "boeing",
    puissance: 1200
  },
  {
    type: "avion",
    marque: "airbus",
    puissance: 1100
  },
];


// // Afficher chaque véhicule, avec le type, la marque et la puissance.
// véhicules.forEach((véhicule) => {
//   const { type, marque, puissance } = véhicule;
//   saySomething(`type: ${type}, marque: ${marque}, puissance: ${puissance}`);
// });

// Afficher chaque voiture avec un filter
véhicules
  .filter((véhicule) => véhicule.type === "voiture")
  .forEach((véhicule) => {
    const { type, marque, puissance } = véhicule;
    saySomething(`type :${type}, marque :${marque}, puissance: ${puissance}`);
  });


// N'afficher que les marques des avions
véhicules
  .filter((véhicule) => véhicule.type === "avion")
  .forEach((véhicule) => saySomething(`marque : ${véhicule.marque}`));


// Afficher une somme d'un tableau avec un reduce

const nombres = [1, 2, 3, 4, 5];

saySomething(
  nombres.reduce((a, b) => {
    saySomething(`valeur a précédente : ${a}, valeur b d'accumulation : ${b}`);
    return a + b;
  }, 0)
);