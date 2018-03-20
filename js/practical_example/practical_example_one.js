function setUpEvents(){

var content = document.getElementById("content");
var button = document.getElementById("show");
  
  button.onclick = function () {
    
    if (content.className = "open"){
      content.classname="";
      button.innerHTML="Show More";
    } else {
      content.classname="open";
      button.innerHTML="Show Less";
    }
};
