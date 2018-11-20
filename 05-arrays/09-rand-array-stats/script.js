/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
document.getElementById("run").addEventListener("click", function(){
var tab = [];
var sum=0;

    for(var i = 0;i < 10; i++){
    tab[i] = Math.floor((Math.random()*100)+1);
    sum = sum+tab[i];
    document.getElementById("n-"+(i+1)).innerHTML=tab[i];

    
}
document.getElementById('min').innerHTML = Math.min(... tab);
document.getElementById('max').innerHTML = Math.max(... tab);
document.getElementById('sum').innerHTML = sum;
document.getElementById('average').innerHTML = sum / tab.length;

});
})();
