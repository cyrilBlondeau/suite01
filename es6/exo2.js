/*
  Entraînement Array.prototype.filter

  Ecrire une fonction "filterEvenNumbers"
  qui permet de filtrer un tableau d'entiers (positifs) passé en paramètre
  et de retourner la liste des nombres pairs de ce tableau.

  Prototype:
      arr filterEvenNumbers(arr);
*/

//  écrire votre code sous ce commentaire
const filterEvenNumbers = array => {
  let result = array.filter(i => i % 2 === 0)
  console.log(result)
}

/*var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);*/

/*
  Test 1
  Résultat attendu : [2, 6, 8]
*/

filterEvenNumbers([2, 5, 6, 8]);

/*
  Test 2
  Résultat attendu : []
*/

filterEvenNumbers([1, 3, 5, 7]);

/*
  Test 3
  Résultat attendu : [0, 8]
*/

filterEvenNumbers([0, 3, 8, 11]);

/* DO NOT TOUCH */
module.exports = {
  filterEvenNumbers: filterEvenNumbers
}
