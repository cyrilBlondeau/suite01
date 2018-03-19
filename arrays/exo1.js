/*
  Ecrire une fonction "getCharAt"
  qui retourne le caractère à une certaine position.
  Si la position demandée est inexistante, retourner une chaine vide.

  Prototype:
      str getCharAt(str, position);

  Fonctions interdites:
    - String.prototype.charAt()
*/

//  écrire votre code sous ce commentaire
const getCharAt = (mot, nb) => {
  let toto = mot.split('')
  if (nb > mot.length) {
    console.log('')
  } else {
    console.log(toto[nb])
  }
}

/*
  Test 1
  Résultat attendu : "j"
*/

getCharAt("bonjour", 3);

/*
  Test 2
  Résultat attendu : "v"
*/

getCharAt("comment ça va?", 11);
getCharAt("kiki", 11);

/* DO NOT TOUCH */
module.exports = {
  getCharAt: getCharAt
}
