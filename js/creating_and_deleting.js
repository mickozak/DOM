//Creating an object.

//Creating an object with document.createElement(newElement) - for example:

let newObj = document.createElement('div');
    newObj.id = 'myObj'
    newObj.innerText = 'This is...';
    newObj.setAttribute('title', 'This is new Element');
    newObj.classList.add('objElement');
    newObj.style.color = 'red';

//The element can be inserted into the document via parentElement.appendChild(newElement) - for example:

let div = document.querySelector('.firstParagraph');
    div.appendChild(newObj);

//Removing elements via parentNode.removeChild(element) - for example:

    div.removeChild(newObj);

//Replacing elements via parent.replaceChild(newChild, oldChild) - for example:

    div.replaceChild(newObj, oldObj);
    
