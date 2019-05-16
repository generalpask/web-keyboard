var clicked = false;

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
    
    console.log("key = " + event.key + " and code = " + event.code);

    const key = document.getElementById(event.code);

    var unusedKeys = ["", "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Insert", "Delete", "Equal", "BracketRight", "Tab", "Enter", "CapsLock", "ShiftLeft", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "AltRight", "ControlRight", "PageUp", "ArrowUp", "PageDown", "ArrowLeft", "ArrowDown", "ArrowRight"]

    var specialKeys = []

    if (event.code == 'Enter') {
        $("#EnterTop, #EnterBottom").addClass('pressed');
    }
    else {
        $(key).addClass('pressed');
    }
    
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