
//Click on Mozilla Logo to change image
let myImage = document.querySelector('img');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === "images/firefox.png") {
    myImage.setAttribute ('src', 'images/cat.png');
  }else {
    myImage.setAttribute ('src', "images/firefox.png");
  }
}

//"Change User" button
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//Set user name
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();  
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool' + storedName;
}

myButton.onclick = function () {
  setUserName();
}
 