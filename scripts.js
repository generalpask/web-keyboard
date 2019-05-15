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

document.addEventListener('keydown', function(event) {
    
    console.log("key = " + event.key + " and code = " + event.code);

    const key = document.getElementById(event.code);

    if (event.code == 'Enter') {
        $("#EnterTop, #EnterBottom").addClass('pressed');
    }
    else {
        $(key).addClass('pressed');
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
})