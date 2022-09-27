const saySomething = (something) => document.write('</br>' + something);

const nombre = 150;

// boucle for

// itération => variable qui s'incrémentera à chaque tour de boucle

// dans une boucle for, il y a 3 paramètres à placer :
//  1. la déclaration de variable d'itération
//  2. une condition qui conduira la boucle tant qu'elle est vérifiée
//  3. une incrémentation ou décrémentation

for (let i = 1; i <= nombre; i++) {
  saySomething('le compteur est à ' + i);
}

const array = ['pomme', 'poire', 'banane', 'fraise'];

for (let i = 0; i < array.length; i++) {
  const fruit = array[i];
  saySomething(
    `j'ai acheté une ${fruit === 'pomme'
      ? 'pomme verte et bio, ma préférée du monde des titounis !'
      : fruit
    }`,
  );
  if (fruit === 'banane') {
    saySomething('oh, mon fruit préféré !!');
  }
}

let dev = false;

while (dev === false) {
  saySomething(`j'suis pas dev !`);
  for (let i = 1; i <= 12; i++) {
    if (i === 12) {
      dev = true;
    }
    saySomething("j'bosse le code depuis " + i + ' mois');
  }
}

saySomething(`ca y est j'suis dev maintenant !`);
