//Events are actions that happen in the browser. It can be called by the user, but also by every element on the page.

//A new event registration mode - .ddEventListener().
//It accepts 3 arguments: event type, callback function and optional argument that enables or disables event propagation.

let element = document.querySelector('.elem')

function showMeIt(){
    console.log('You clicked');
}

element.addEventListener('click',showMeIt);

//or

element.addEventListener('click', function(){
    this.style.color='red';
});

/*Avoid anonymous functions.

.element.removeEventListener() is used to de-register functions from a given event, 
it accepts the same arguments that were used to register the given event.

element.removeEventListener('click', showMeIt);

Calling up the event.

element.click()

Mouse events:

mousedown - the mouse button has been pressed
mouseup - the mouse button has been released
click - the mouse button has been pressed and released
dblclick - double click
mousemove - the cursor moves around the element
mouseover - the cursor is on the element
mouseout - the cursor has left the elemen

function showMeIt(){
    console.log('You clicked')
}

element.addEventListener('mousedown', showMeIt);

*/
