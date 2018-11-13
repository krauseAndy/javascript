/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var table_2 = document.createElement("table");
    var target = document.getElementById("target");

    target.appendChild(table_2);

    for( i = 0 ; i < 10  ;i++){

        target.getElementsByTagName("table")[0].insertRow(i);

        for(j=0 ; j < 10; j++){
            
            target.getElementsByTagName("tr")[i].insertCell(j).innerHTML =(j+1)*(i+1);

        }
    }
})();


