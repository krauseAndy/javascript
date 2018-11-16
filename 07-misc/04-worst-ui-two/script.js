/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

/*(function() {

    document.getElementById("part-one").addEventListener("click", function(){

    })

})();
*/
(function() {
   
    document.querySelectorAll("button").forEach(function(bouton){
               
               bouton.addEventListener("click",function() {
                   
                    var min = bouton.getAttribute("data-min");
                    var max = bouton.getAttribute("data-max");
                
                    if(parseInt(bouton.innerHTML)< max){                   
                        bouton.innerHTML = parseInt(bouton.innerHTML)+1;

                    if(bouton.innerHTML.length==1){
                        bouton.innerHTML="0" + bouton.innerHTML;
                    }
                      
                    }else{
                      bouton.innerHTML= min ;
                    }
                   
                   document.getElementById("target").innerHTML="+" + document.getElementById("part-one").innerHTML + document.getElementById("part-two").innerHTML + document.getElementById("part-three").innerHTML + document.getElementById("part-four").innerHTML;
            })
 })
    
    
    
})();
