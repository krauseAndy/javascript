/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
  var miam = prompt("Est ce que tu veux manger du gateau au chocolat ?");

  if(miam == 'oui'){
    alert("Bouffe mon gars, BOUFFE !!");
    
  } else {
    alert("QUOI ?! Il est mauvais mon gateau ?!");
  }

})();