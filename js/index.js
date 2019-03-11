// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs 			= require('fs');
const path    = require('path');
const {shell} = require('electron');

var p = path.join(__dirname, '/imagenes/', 'test.png');

const exLinksBtn = document.getElementById('open-ex-links');

exLinksBtn.addEventListener('click', (event) => {
  shell.openItem(p);
})


/**--------------------------------------------------------- */

let directory = "imagenes/futuristic/";

const files = fs.readdirSync(directory);

const container = document.getElementById('msgContainer');

function appendNewImage(path) {
  // <img src="imagenes/img.webp" width="180">
  let elem = document.createElement("img");
  elem.setAttribute("src", path);
  //elem.setAttribute("height", "768");
  elem.setAttribute("width", "180");
  //elem.setAttribute("alt", "Flower");
  container.appendChild(elem);
}

function appendNewLink(path, createAText) {
  // <a href="#" class="openFile">open-ex-links</a> 
  let elem = document.createElement('a');
  elem.innerText = createAText;
  elem.setAttribute("class", "openFile");
  elem.setAttribute("id", path);
  elem.setAttribute("href", "#");
  container.appendChild(elem);

}


for (let index = 0; index < files.length; index++) {
  appendNewImage(directory+files[index]);  
  appendNewLink(directory+files[index], "link " + index); 
}

//openFile

var link = document.querySelectorAll('.openFile');

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function(event) {
    let image = this.getAttribute('id');
    console.log(image);
    shell.openItem(path.join(__dirname, image));
  });
}