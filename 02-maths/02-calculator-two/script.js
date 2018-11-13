/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var one = document.getElementById("op-one").value;
    var two = document.getElementById("op-two").value;
    
    
    var performOperation = function(operation) {

        switch (operation) {
            case "addition":
            alert(parseInt(one)+parseInt(two));
            break;
            case "substraction":
            alert(parseInt(one)-parseInt(two));
            break;
            case "multiplication":
            alert(parseInt(one)*parseInt(two));
            break;
            case "division":
            alert(parseInt(one)/parseInt(two));
            break;
            default:
            alert("DANGER! DANGER! ERROR! DANGER!!");
            break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach(function($btn) {
        $btn.addEventListener("click", function() {
            performOperation($btn.id);
        });
    });
})();
