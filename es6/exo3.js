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
  let result = array.find(i => {
    if (i.color === 'jaune') {
      return i.name
    } else {
      return ''
    }
  })
  console.log(result)
}
/*
const findYellowFruit = array => {
  let result = array.find(i => i.color === 'jaune') 
  console.log(result)
}*/

/*
  Test 1
  Résultat attendu : "banane"
*/

findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'banane', color: 'jaune'}, {name: 'pomme', color: 'rouge'}]);

/*
  Test 2
  Résultat attendu : ""
*/

findYellowFruit([{name: 'orange', color: 'orange'}, {name: 'pomme', color: 'vert'}]);

/* DO NOT TOUCH */
module.exports = {
  findYellowFruit: findYellowFruit
}
