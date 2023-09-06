var obj= {
  academyName: "그린컴퓨터아트학원",
  loaction : "둔산점",
  address: "대전광역시 서구 대덕대로 182 오라클빌딩 3층",
  telNumber: "042-476-2111",
  classroomNumber: 305,
  lectureName: "it's different",
  studentList:[
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
    "홍문기"
  ],
};
// Q. 객체 데이터에 접근해서 문장을 완성하세요.
// --------------------1-------------------
console.log("나는 "+obj.address+"의 "+obj.academyName+" "+obj.loaction+" "+obj.classroomNumber+"호에 있는 "+obj.lectureName+"에서 훈련중인 "+obj.studentList[15]+"입니다.");

// --------------------2-------------------
sentence = "나는 "+obj.address+"의 "+obj.academyName+" "+obj.loaction+" "+obj.classroomNumber+"호에 있는 "+obj.lectureName+"에서 훈련중인 "+obj.studentList[15]+"입니다.";

console.log(sentence);

// --------------------3-------------------
console.log(`나는 ${obj.address}의 ${obj.academyName} ${obj.loaction} ${obj.classroomNumber}호에 있는 ${obj.lectureName}에서 훈련중인 ${obj.studentList[15]}입니다.`);

// --------------------4-------------------
// 속성 변경
obj.address = "모암로 24번길 64";

console.log("우리집은 "+obj.address);
// 속성 추가
obj.teacher = "공욱재";

console.log("강사님은 "+obj.teacher);

// -----------------------------------
console.log(typeof(obj.studentList));
console.log(typeof(obj));

console.log(obj.studentList.indexOf('최은철'));
// 속성 삭제
delete(obj.studentList);

console.log(obj.studentList);

// ------------------------------------
