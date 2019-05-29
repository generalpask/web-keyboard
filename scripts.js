var clicked = false;

// Dessa två funktioner aktiveras om man trycker på knapparna med musen
$("button.key").on('mousedown', function(){
    $(this).addClass('pressed');
    clicked = true;
});

$("button.key").on('mouseup', function(){
    if (clicked) {
        clicked = false;
    	$(this).removeClass('pressed');
    }
});

// Listeners keydown och keyup känner av när användaren trycker ner en tangent på tangentborder på sin dator
document.addEventListener('keydown', function(event) {
    
    // Loggar .key och .code för debug
    console.log("key = " + event.key + " and code = " + event.code);

    const key = document.getElementById(event.code);

    // Keys som inte ska användas
    var unusedKeys = ["", "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Insert", "Delete", "Equal", "BracketRight", "Tab", "Enter", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight", "PageUp", "ArrowUp", "PageDown", "ArrowLeft", "ArrowDown", "ArrowRight"]

    var specialKeys = []

    
    if (event.code == 'Enter') { // Entertangenten är två knappar, så de måste reagera tillsammans
        $("#EnterTop, #EnterBottom").addClass('pressed');
    }
    else { // Reagerar annars som vanligt
        $(key).addClass('pressed');
    }
    
    // Backspace-funktion
    if (event.code == 'Backspace') {
        $('.input').text(function (_,txt) {
            return txt.slice(0, -1);
        });
    }

    /*
    else if (event.code == "Enter") {
        $('.input').append("<br\>");
    }
    */

    else if (unusedKeys.includes(event.code)) { // Om tangenten inte ska användas,
        return false;                           // printa inget
    }
    else {                              // Annars, 
        $(".input").append(event.key);  // printa till input
    }
    
}, true);

// Händer när användaren släpper tangenten:
document.addEventListener('keyup', function(event) { 

    const key = document.getElementById(event.code);

    if (event.code == 'Enter') {
        $("#EnterTop, #EnterBottom").removeClass('pressed');
    }
    else {
        $(key).removeClass('pressed');
    }

}, true);

// Får linjen att blinka
var intervalID = window.setInterval(myCallback, 500);
function myCallback() {
    $('.line').toggleClass('hidden');
}