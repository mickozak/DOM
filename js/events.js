//Events are actions that happen in the browser. It can be called by the user, but also by every element on the page.

//A new event registration mode - .ddEventListener().
//It accepts 3 arguments: event type, callback function and optional argument that enables or disables event propagation.

let element = document.querySelector('.elem');

element.addEventListener('click', showMeIt);

//or

element.addEventListener('click', function(){
    this.style.color='red';
});

//Avoid anonymous functions.

//.element.removeEventListener() is used to de-register functions from a given event, 
//it accepts the same arguments that were used to register the given event.

element.removeEventListener('click', showMeIt);

//Calling up the event.

element.click()
