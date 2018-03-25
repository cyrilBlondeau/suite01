/*
  Ecrire une fonction "splitStr" qui, d'où son nom,
  sépare une chaine de caractères sur une occurence donnée,
  et renvoie un tableau contenant le résultat de la séparation des données.
  Prototype:
      arr splitStr(str, occurence);

  Fonctions interdites:
      - String.split
*/

//  écrire votre code sous ce commentaire
const splitStr = (str, occ) => {
	let word = ''
	let array = []
	for (let i = 0; i < str.length; i++) {
		word = word + str[i]
		if (str[i] === occ) {
			array.push(word)
			word = ''
		}
	}
	array.push(word)
	console.log(array)
}

/*
  Test 1
  Résultat attendu : ["Bonjour", "comment", "tu", "vas", "?", "ça", "va", "merci."]
*/
splitStr("Bonjour comment tu vas ? ça va merci.", " ");

/*
  Test 2
  Résultat attendu : ["06", "20", "42", "18", "54"]
*/
splitStr("06-20-42-18-54", "-");

/* DO NOT TOUCH */
module.exports = {
  splitStr: splitStr
}
