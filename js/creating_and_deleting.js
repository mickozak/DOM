//Creating an object.

//Creating an object with document.createElement() - for example:

let objOne = document.createElement('div');
    objOne.id = 'myObj'
    objOne.innerText = 'This is...';
    objOne.setAttribute('title', 'This is new Element');
    objOne.classList.add('objElement');
    objOne.style.color = 'red';

//The element can be inserted into the document via parentElement.appendChild() - for example:

 let div = document.querySelector('.firstParagraph');
    div.appendChild(objOne);
