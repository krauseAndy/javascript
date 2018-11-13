/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var date=new Date();
    var jours = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
    var mois = ['Janvier','Fevrier','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre'];
    var jours_2 = date.getDay();
    var mois_2 = date.getMonth();
    var jours_txt = jours[jours_2];
    var mois_txt = mois[mois_2];
    var txt = jours_txt+" "+date.getDate()+" "+mois_txt+" "+date.getFullYear()+" "+date.getHours()+"h"+date.getMinutes();
 
    document.getElementById("target").innerHTML = txt;


})();
