document.querySelector('h1').textContent = 'Hello World!'; // DOM API

let myImage = document.querySelector('img')

myImage.onclick = function() {
  let mySource = myImage.getAttribute('src') // get attribute to check
  if(mySource === 'images/firefox-icon.png'){
    myImage.setAttribute('src', 'images/bigeye.png') // set attribute
  }
  else{
    myImage.setAttribute('src', 'images/firefox-icon.png')
  }
}
