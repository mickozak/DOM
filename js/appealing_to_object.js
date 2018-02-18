//DOM (Document Object Model) - it is a model, interface that using our methods and properties allows us to act on our document.
    
//The DOMContentLoaded event guarantees that the script will start working when the entire DOM tree has been loaded.

document.addEventListener("DOMContentLoaded", function() {
    ...
});

//Appealing to objects
    
document.getElementById('');
document.getElementsByTagName('');
document.getElementsByClassName('');
document.querySelector('');
document.querySelectorAll('');

//getElementsByClassName i getElementByTagName - return so-called living collections in contrast to querySelectorAll.
//If we place such a collection under a variable, it will automatically update depending on the elements on the page.

//We try to save downloaded elements to a variable.
//For example:

let liList = document.querySelectorAll('li');
    
//Loop after collection:
    
for (let i = 0; i<=liList.length; i++){
    liList.style.color='red';
}
