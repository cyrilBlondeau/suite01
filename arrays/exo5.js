/*
  Ecrire une fonction "concatArrays"
  qui prend deux tableaux et qui renvoie un tableau constitué du contenu des deux tableaux.
  Prototype:
      arr concatArrays(arr1, arr2);

  Fonctions interdites:
      - Array.concat

  La fonction ne doit pas modifier les tableaux sources.
*/

//  écrire votre code sous ce commentaire
const concatArrays = (array1, array2) => {
  array3 = []
  for (let i of array1) {
    array3.push(i)
  }
  for (let i of array2) {
    array3.push(i)
  }
  return array3
}

/*
  Test 1
  Résultat attendu : ["bonjour", "ça", "va?", 3, 4]
*/
concatArrays(["bonjour"], ["ça", "va?", 3, 4])

/*
  Test 2
  Résultat attendu : ["enchanté", "je", "m'appelle", "comment?"]
*/
concatArrays(["enchanté", "je"], ["m\'appelle", "comment?"])

/* DO NOT TOUCH */
module.exports = {
  concatArrays: concatArrays
}
