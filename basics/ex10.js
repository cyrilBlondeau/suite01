/*
    Ecrire une fonction "shoppingList",
    qui prend un paramètre un tableau de paniers;

    Un panier est un tableau de mots;

    La fonction retourne un objet contenant:
        - comme clef le nom du produit rencontré
        - comme valeur le nombre de fois qu'il à été rencontré

    Important -> l'ordre n'a aucune importance
*/

//  écrire votre code sous ce commentaire
const fruits = {
    orange: 0,
    kiwi: 0,
    ananas: 0,
    prune: 0,
    banane: 0,
    pamplemousse: 0
}

const shoppingList = array => {
    for (let i of array) {
        for (let j of i) {
            switch (j) {
                case "orange":
                    fruits.orange++;
                break;
                case "kiwi":
                    fruits.kiwi++;
                break;
                case "ananas":
                    fruits.ananas++;
                break;
                case "prune":
                    fruits.prune++;
                break;
                case "banane":
                    fruits.banane++;
                break;
                case "pamplemousse":
                    fruits.pamplemousse++;
                break;
            }  // fermeture switch
        } // fermeture j of i
    } // fermeture i of array
    console.log(fruits)
} // fermeture fonction

/*
  Test 1
  Résultat attendu : {
    "orange": 8,
    "kiwi": 4,
    "ananas": 3,
    "prune": 2,
    "banane": 2,
    "pamplemousse": 1
  }
*/

shoppingList([
    ["orange", "orange", "kiwi", "ananas"],
    ["kiwi", "ananas", "banane", "prune"],
    ["orange", "orange", "orange", "orange"],
    ["orange", "orange", "kiwi", "kiwi"],
    ["prune", "banane", "pamplemousse", "ananas"]
]);

/* DO NOT TOUCH */
module.exports = {
  shoppingList: shoppingList
}
