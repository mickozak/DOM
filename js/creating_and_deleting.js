//Creating an object.

//Creating an object with document.createElement(newElement) - for example:

let firstObj = document.createElement('div');
    firstObj.id = 'firstObj'
    firstObj.innerText = 'This is...';
    firstObj.setAttribute('title', 'This is new Element');
    firstObj.classList.add('objElement');
    firstObj.style.color = 'red';

let secondObj = document.createElement('div');
    secondObj.id = 'secondObj'
    secondObj.innerText = 'My name is...';
    secondObj.setAttribute('title', 'This is second Element');
    secondObj.classList.add('firstObj');
    secondObj.style.color = 'green';

//The element can be inserted into the document via parentElement.appendChild(newElement) - for example:

let div = document.querySelector('.firstParagraph');
    div.appendChild(newObj);

//Removing elements via parentNode.removeChild(element) - for example:

    div.removeChild(newObj);

//Replacing elements via parent.replaceChild(newChild, oldChild) - for example:

    div.replaceChild(newObj, oldObj);
    
