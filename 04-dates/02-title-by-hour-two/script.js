/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // j'assigne ma variable date, la date du moment avec la fonction new Date()
    var date = new Date ();

    // je prend ma variable qui contiens ma date actuel, et j'utilise la fonction Gethours() 
    // pour prendre l'heure de cette date et je voiq si elle est plus grande ou egale
    // a 17 et j'utilise ici aussi la fonction getMinutes() 
    // pour prendre les minutes actuel et je vois si elles sont plus grande que 30, 
    // si oui j'affiche B'soir ! et sinon j'affiche B'jour !


    if(date.getHours() >= 17 && date.getMinutes() >= 30 ){
       
    }else if(date.getMinutes() >= 30 ){
       
        document.getElementById("target").innerHTML = "B'soir !"
    }else{
        document.getElementById("target").innerHTML = "B'jour !"
    }

})();





