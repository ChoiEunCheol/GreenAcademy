let root = document.getElementById("root");
let left = document.getElementById("left");
let liTag = document.getElementsByTagName("li")[1];

let imgTag = document.createElement("img");
imgTag.src = "./1.jpg"
// document.body.appendChild(imgTag);

function tagMaker(parent, text, tagName) {
  let tag = document.createElement(tagName);
  tag.textContent = text;

  parent.appendChild(tag);
}

tagMaker(left,"😊","li");

liTag.appendChild(imgTag);

tagMaker(left,imgTag,"li");
