/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function(){
    var jour = document.getElementById("dob-day").value;
    var mois = document.getElementById("dob-month").value;
    var annee = document.getElementById("dob-year").value;

    var date = new Date ();
    var date_2 = new Date (annee+"/"+mois+"/"+jour);
    var age = date.getFullYear() - date_2.getFullYear();
    
    date_2.setFullYear(date.getFullYear());

    if(date < date_2){
        age--;
    }
    alert("Tu as "+age+" Ans.");
    
    });
})();
