/*
    Ecrire une fonction "boostedAddition",
    qui prend un paramètre un tableau de nombre,
    et qui retourne un nombre étant l'addition de tous les nombre du tableau

*/

//  écrire votre code sous ce commentaire
const boostedAddition = array => {
	let total = array.reduce((a, b) => a + b, 0)
	return total
}

/*
  Test 1
  Résultat attendu : 15
*/

boostedAddition([4, 5, 6]);

/*
  Test 2
  Résultat attendu : 44
*/
boostedAddition([4, 4, 6, 8, 10, 12]);

/* DO NOT TOUCH */
module.exports = {
  boostedAddition: boostedAddition
}
