const { create } = require("domain");
const fs = require("fs");

const studentList = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기",
];

// -----------------------------------------------------

function createFile() {
  for (let i = 0; i < studentList.length; i++) {
    fs.writeFile(
      studentList[i] + ".html",
      "<h1>" + studentList[i] + "</h1>",
      function () {}
    );
  }
}

createFile();

// ------------------------------------------------------

// function createFile(title, contents, tag) {
//     fs.writeFile(
//       title + ".html",
//       tag + contents,
//       function () {}
//     );
// }

// for ( let i = 0 ; i < studentList.length ; i ++) {

// createFile(studentList[i],studentList[i],"<li>");

// }

//------------------------------------------------------

// function createFile(title, contents, tag) {
//   let text = "<" + tag + ">" + contents + "</" + tag + ">";
//   fs.writeFile(title + ".html", text, function () {});
// }

// createFile("1", "2", "li");

//------------------------------------------------------
// for (let i = 0; i < studentList.length; i++) {
//   function createFile(title, contents, tag) {
//     fs.writeFile(title[i] + ".html", tag + contents, function () {});
//   }
//   return
// }

// createFile(studentList, "ㅇㅇ", "<p>");
