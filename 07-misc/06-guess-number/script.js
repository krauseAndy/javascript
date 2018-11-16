/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var msg     = "Le nombre a trouvé est entre 1 et 100";
    var mystere = Math.floor(Math.random()*100);
    var cpt     = 0;
    var chiffre = 0;
    
    console.log(mystere);

    do{
        chiffre = prompt(msg);
        cpt++;

        if(chiffre > mystere){
            msg = " C'est moins";
        }else{
            msg = " C'est plus";
        }
    }while(chiffre != mystere);
        alert("Bienjoué, Tu as trouvé le chiffre en "+cpt+" fois.");
})();


