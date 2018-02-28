// Relationships between elements 

let one = document.querySelector('#text');

console.log(one.parentElement); // <div class="textCnt">

console.log(one.parentNode); // <div class="textCnt">

console.log(one.firstChild); // My

console.log(one.lastChild); // #text

console.log(one.firstElementChild); // <strong style="color:green">name</strong>

console.log(one.lastElementChild); // <span style="color:orange">Gregory</span>

console.log(one.children); // HTMLCollection(2) [strong, span]

console.log(one.children[0]); // <strong style="color:green">name</strong>

console.log(one.childNodes); // NodeList(5) [text, strong, text, span, text]

console.log(one.childNodes[0]); // My

console.log(one.firstElementChild.nextElementSibling); // <span style="color:orange">Gregory</span>

console.log(one.firstElementChild.nextSibling); // is

console.log(one.firstElementChild.previousElementSibling); // null

console.log(one.firstElementChild.previousSibling); // My

console.log(one.children[0].firstChild); // "name"
 
console.log(one.children[0].firstElementChild); // null

console.log(one.firstChild.firstElementChild); // undefined

console.log(one.firstElementChild.firstElementChild); // null

console.log(one.firstElementChild.firstChild); // "name"
