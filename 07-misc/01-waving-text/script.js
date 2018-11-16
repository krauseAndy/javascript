/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //variables
    var wave = document.getElementById("target").innerHTML;
    var text = "";
    var textSize = [14, 16, 18, 20, 22, 24, 26, 24, 22, 20, 18, 16, 14];

    // loop?
    for(var i = 0; i < wave.length; i++) {
        if(wave[i] != " ") text += '<span style="font-size:' + textSize[i % 9] + 'px;">' + wave[i] + '</span>';
        else text += " ";

    }
    document.getElementById("target").innerHTML = text;
})();