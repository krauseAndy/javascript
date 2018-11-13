/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
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

        if(mdp != mdp_2){
            document.getElementsByTagName("input")[0].classList.add("error");
            document.getElementsByTagName("input")[1].classList.add("error");
        }else{
            alert("Le mot de pass est bon");
        }
    })

})();
