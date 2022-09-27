// une fonction flechée !

const saySomething = (something) => {
  document.write(`${something}</br>`);
};


/*
    Un peu de doc :)
    
    Array.shift() supprimera le premier élément de ton tableau et retournera l'élément supprimé
    const laValeurSupprimee = array.shift()

    array.pop() supprime le dernier élément du tableau et le retourne,
    ce qui fait que si tu veux créer une nouvelle variable avec le dernier élément du 
    tableau (qui sera supprimé du tableau) tu fais
    const maVariable = array.pop();

    Array.unshift(variable) insèrera la variable au début du tableau

    array.push(variable) insèrera la variable à la fin du tableau 

    array.concat(...array2) concaténera le tableau avec le ou les tableaux en paramètres :
      const array1 = [1, 2, 3]
      const array2 = [4, 5, 6]
      const array3 = [7, 8, 9]
      const array1&2 = array1.concat(array2) => [1,2,3,4,5,6]
      const array1&2&3 = array1.concat(array2, array3) => [1,2,3,4,5,6,7,8,9] 

    array.includes(variable) recherchera dans le tableau la variable et retournera un booléen (true ou false)
    array.includes(variable) ? true : false;
    */

const
  aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓`;

const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [pisces, gemini, libra, aquarius];
const waterSigns = [scorpio, pisces];

/*  🏁 QUESTION 1
    AJOUTER un élément A LA FIN d'un tableau
    le Sagittaire manque dans le tableau des signes de feu
*/

/* 🏁 QUESTION 2
    RETIRER un élément A LA FIN d'un tableau
    Le sagittaire ne devrait pas être dans les signes de terre
*/

/* 🏁 QUESTION 3
    RETIRER un élément AU DEBUT d'un tableau
    Les poissons ne devraient pas être dans les signes d'air
*/

/*  🏁 QUESTION 4
    AJOUTER un élément AU DEBUT d'un tableau
    le signe Cancer manque dans le tableau des signes d'eau
*/

/*  🏁 QUESTION 5
    CONCATENER un tableau avec TOUT LES AUTRES TABLEAUX
    Nous voulons un tableau avec dans l'ordre les signes de feu, de terre, d'air, et d'eau
*/
const allSigns = [1, 2]; //modifier le tableau

/*  🏁 QUESTION 6
    RECHERCHER DANS UN TABLEAU
    Nous voulons savoir si les signes de feu contiennent le sagittaire
*/
const fireContainSagittarius = false; // modifier la valeur

/*  🏁 QUESTION 7
RECHERCHER DANS UN TABLEAU
Nous voulons savoir si les signes d'eau contiennent le lion
*/
const waterContainLeo = true; // modifier la valeur


// Pas touche, lignes de test !! :)
const test = [fireSigns[0], fireSigns[1], fireSigns[2], earthSigns[0], earthSigns[1], earthSigns[2], airSigns[0], airSigns[1], airSigns[2], waterSigns[0], waterSigns[1], waterSigns[2]];
const arrayVerification = allSigns
  .map(
    (_, index) => allSigns[index] === test[index] ? true : false)
  .reduce((a, b) => {
    if (a && b) {
      return true;
    } else {
      return false;
    }
  });
saySomething(fireSigns[fireSigns.length - 1] === `♐` ? "Bonne Réponse ✅" : "Mauvaise Réponse ❌");
saySomething(earthSigns[earthSigns.length - 1] !== `♐` ? "Bonne Réponse ✅" : "Mauvaise Réponse ❌");
saySomething(airSigns[0] !== pisces ? "Bonne Réponse ✅" : "Mauvaise Réponse ❌");
saySomething(waterSigns[0] === cancer ? "Bonne Réponse ✅" : "Mauvaise Réponse ❌");
saySomething(arrayVerification ? "Bonne Réponse ✅" : "Mauvaise Réponse ❌");
saySomething(fireContainSagittarius ? "Bonne Réponse ✅" : "Mauvaise Réponse ❌");
saySomething(!waterContainLeo ? "Bonne Réponse ✅" : "Mauvaise Réponse ❌")


