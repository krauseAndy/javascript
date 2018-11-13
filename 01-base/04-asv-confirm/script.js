/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

do{

var age = prompt("Quel age tu as ?");
var sexe = prompt("Zizi ou nounou ?");
var local = prompt("T'es d'ou ?");
        
all = confirm("Donc tu as "+age+" ans, tu as un "+sexe+" et tu viens de "+local);
        
}while( all == false );
        
        
})();
