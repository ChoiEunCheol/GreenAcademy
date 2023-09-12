let wrapping = {
  myname: "최은철",
  birthyear: 1996,
  birthmonth: 7,
  birthdate: 13
}

let today = new Date()

console.log("만나이 계산기입니다.");

for (let i = wrapping.birthyear; i <= 2023; i++) {
  if (wrapping.birthmonth <= today.getMonth() && wrapping.birthdate <= today.getDate()){
    // console.log(`${i}년에는 ${i - wrapping.birthyear-1}살입니다.`);
    console.log("A");
  }
  else{
    // console.log(`${i}년에는 ${i - wrapping.birthyear}살입니다.`);
    console.log("B");

  }
}

console.log(wrapping.birthdate);

let aa = false ? 100 : 200;
console.log(aa);