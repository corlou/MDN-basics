let myImage = document.querySelector('img');

myImage.onclick = function(){
  var mySrc = myImage.getAttribute('src');
  if(mySrc === "images/firefox.png") {
    myImage.setAttribute ('src', 'images/cat.png');
  }else {
    myImage.setAttribute ('src', "images/firefox.png");
  }
}
