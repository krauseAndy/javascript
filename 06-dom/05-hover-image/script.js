/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var img = document.querySelector("img").src;
    var imghover = document.querySelector("img").getAttribute("data-hover");

    document.querySelector("img").addEventListener('mouseenter', function(){
        document.querySelector("img").src = imghover;
    })
    document.querySelector("img").addEventListener('mouseout', function(){
        document.querySelector("img").src = img;

    })
})();



