/*
  Entraînement Array.prototype.find

  Ecrire une fonction "findYellowFruit"
  qui permet de trouver le 1er fruit jaune d'un tableau de fruits passé
  en paramètre. Cette fonction retournera le nom du fruit en question.

  Prototype:
      arr findYellowFruit(arr);
*/

//  écrire votre code sous ce commentaire
const findYellowFruit = array => {
  //let result = array.find(i => i.color === 'jaune')
  let result = ''
  if (array.find(i => i.color === 'jaune')) {
    result = i.name
    return
  } else {
    result = ''
  }
  return result
}

/*
  Test 1
  Résultat attendu : "banane"
*/

console.log(findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'banane', color: 'jaune'}, {name: 'pomme', color: 'rouge'}]))

/*
  Test 2
  Résultat attendu : ""
*/

console.log(findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'pomme', color: 'vert'}]))

/* DO NOT TOUCH */
module.exports = {
  findYellowFruit: findYellowFruit
}
