/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){

        var mdp = document.getElementById("pass-one").value;
        var mdp_2 = document.getElementById("pass-two").value;

        if(mdp === mdp_2){
            alert("Le mot de pass est correct.")
            document.getElementById("pass-one").style.borderColor="black";
            document.getElementById("pass-two").style.borderColor="black";
        }else if(mdp != mdp_2){
            document.getElementById("pass-one").style.borderColor="red";
            document.getElementById("pass-two").style.borderColor="red";
        }
    })



})();
