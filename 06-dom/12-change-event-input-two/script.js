/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("pass-one").addEventListener("input", function() {

    var longueur = document.getElementById("pass-one").value.length;
    var count = 0;
    var tab = document.getElementById("pass-one").value.split("");

        for( i = 0 ; i < tab.length; i++){
            if(!isNaN(tab[i])){
                count++;
            }
        }

        if (longueur >= 8 && count >= 2){
            document.getElementById("validity").innerHTML = "ok";
        }else{
            document.getElementById("validity").innerHTML = "pas ok";
        }
        
    });
})();